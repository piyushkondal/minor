import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { CategoryModel } from "../model/CategoryModel"
import { db } from "../firebase"

const dbPath = "categoires"

class CategoryServices{
    async Add (data){

         console.log(data);
         

        try{
            let obj = new CategoryModel()
            obj.CategoryName = data.name
            obj.Description = data.description
            obj.image= data.image
            await addDoc(collection(db, dbPath), { ...obj })

            return 1
        } catch (err) {
            console.log(err);
            return 0
        }

        //console.log(data);

    }

    async Update (data,id){

         console.log(data);
         

        try{
            let obj = new CategoryModel()
            obj.CategoryName = data.name
            obj.Description = data.description
            obj.image= data.image
            await updateDoc(doc(db, dbPath,id), { ...obj })

            return 1
        } catch (err) {
            console.log(err);
            return 0
        }

        //console.log(data);

    }

    

    async All() {
        try {

            let CateDocs = await getDocs(collection(db, dbPath))
            let CateData = CateDocs.docs.map((el) => {
                return { id: el.id, ...el.data() }
            })
           
            return CateData



        } catch (err) {
            console.log(err);

        }
    }

    async delete(id) {
        try {

           await deleteDoc(doc(db,dbPath,id))
           return 1
        } catch (err) {
            console.log(err);
            return 0

        }
    }

    async single(id){
        try{
            let CateData= await getDoc(doc(db,dbPath,id))
            return CateData.data()
        } catch (err) {
            console.log(err);

        }
    }
}

export default new CategoryServices