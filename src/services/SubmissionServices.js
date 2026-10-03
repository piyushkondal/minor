import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { SubmissionModel } from "../model/SubmissionModel";
import { db } from "../firebase";
   
const dbPath = "Submission"

class SubmissionServices{
    async Add (data){

         console.log(data);
         

        try{
            let obj = new SubmissionModel()
            obj.SubmissionID = data.SubmissionId
            obj.AssingmentID = data.AssingmentId
            obj.StudentId= data.StudentId
            obj.SubjectName= data.SubjectName
            obj.FileUrl= data.FileUrl
            obj.SubmittedAt= data.SubmittedAt
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
            let obj = new SubmissionModel()
            obj.SubmissionID = data.SubmissionId
            obj.AssingmentID = data.AssingmentId
            obj.StudentId= data.StudentId
            obj.SubjectName= data.SubjectName
            obj.FileUrl= data.FileUrl
            obj.SubmittedAt= data.SubmittedAt
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

            let SubmissionDocs = await getDocs(collection(db, dbPath))
            let SubmissionData = SubmissionDocs.docs.map((el) => {
                return { id: el.id, ...el.data() }
            })
           
            return SubmissionData



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
            let SubmissionData= await getDoc(doc(db,dbPath,id))
            return SubmissionData.data()
        } catch (err) {
            console.log(err);

        }
    }
}

export default new SubmissionServices