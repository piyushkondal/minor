import {
  addDoc,
  collection,
  deleteDoc,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { CategoryModel } from "../model/CategoryModel";
import { auth, db } from "../firebase";

const dbPath = "categoires";

class CategoryServices {
  async Add(data) {
    console.log(data);

    try {
      let obj = new CategoryModel();
      obj.CategoryName = data.name;
      obj.Description = data.description;
      obj.image = data.image;
      await addDoc(collection(db, dbPath), { ...obj });

      return 1;
    } catch (err) {
      console.log(err);
      return 0;
    }

    //console.log(data);
  }

  async Update(data, id) {
    console.log(data);

    try {
      let obj = new CategoryModel();
      obj.CategoryName = data.name;
      obj.Description = data.description;
      obj.image = data.image;
      await updateDoc(doc(db, dbPath, id), { ...obj });

      return 1;
    } catch (err) {
      console.log(err);
      return 0;
    }

    //console.log(data);
  }

  async All() {
    try {
      let catDocs = null;

      // if (!!value) {
      //   catDocs = await getDocs(
      //     query(collection(db, dbPath), where(key, "==", value)),
      //   );
      // } else {
      catDocs = await getDocs(collection(db, dbPath));
      // }

      let catData = catDocs.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });

      return catData;
    } catch (err) {
      console.log(err);
    }
  }

  async delete(id) {
    try {
      await deleteDoc(doc(db, dbPath, id));
      return 1;
    } catch (err) {
      console.log(err);
      return 0;
    }
  }

  async all1() {
    try {
      const categoriesSnap = await getDocs(collection(db, "categories"));
      const categoriesCount = categorySnap.size;
      return categoriesCount;
    } catch (err) {
      console.log(err);
    }
  }

  async single(id) {
    try {
      let CateData = await getDoc(doc(db, dbPath, id));
      return CateData.data();
    } catch (err) {
      console.log(err);
    }
  }

  // async function getMyCourses() {
  //   const user = auth.currentUser;

  //   if (!user) {
  //     throw new Error("User is not logged in");
  //   }

  //   const userSnap = await getDoc(doc(db, "users", user.uid));

  //   if (!userSnap.exists()) {
  //     return [];
  //   }

  //   const { courseIds = [] } = userSnap.data();

  //   if (courseIds.length === 0) {
  //     return [];
  //   }

  //   // Firestore `in` supports a limited number of values,
  //   // so for many courses you may need to batch these queries.
  //   const q = query(
  //     collection(db, "categoires"),
  //     where("__name__", "in", courseIds)
  //   );

  //   const snapshot = await getDocs(q);

  //   return snapshot.docs.map(doc => ({
  //     id: doc.id,
  //     ...doc.data()
  //   }));
  // }
}

export default new CategoryServices();
