import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { TeacherModel } from "../model/TeacherModel";
import { db } from "../firebase";

const dbpath = "users";

class TeacherServices {
  async Add(data) {
    console.log(data);

    try {
      let obj = new TeacherModel();
      obj.TeacherName = data.TeacherName;
      obj.TeacherID = data.TeacherId;
      obj.Email = data.email;
      obj.Password = data.password;
      await addDoc(collection(db, dbpath), { ...obj });

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
      let Obj = new TeacherModel();
      Obj.TeacherID = data.TeacherID;
      Obj.TeacherName = data.TeacherName;
      Obj.Email = data.email;
      Obj.Password = data.password;
      await updateDoc(doc(db, dbpath, id), { ...Obj });

      return 1;
    } catch (err) {
      console.log(err);
      return 0;
    }

    //console.log(data);
  }

  async All() {
    try {
      let TeacherDocs = await getDocs(collection(db, dbpath));
      let TeacherData = TeacherDocs.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });

      return TeacherData;
    } catch (err) {
      console.log(err);
    }
  }

  async delete(id) {
    try {
      await deleteDoc(doc(db, dbpath, id));
      return 1;
    } catch (err) {
      console.log(err);
      return 0;
    }
  }

  async single(id) {
    try {
      let CateData = await getDoc(doc(db, dbpath, id));
      return CateData.data();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new TeacherServices();
