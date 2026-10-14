import {
  setDoc,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  query,
  updateDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TeacherModel } from "../model/TeacherModel";
import { UserModel } from "../model/UserModel";
import { db, auth } from "../firebase";

const dbpath = "Teacher";

class TeacherServices {
  async Add(data) {
    console.log(data);

    try {
      let userCreed = await createUserWithEmailAndPassword(
        auth,
        data.email.trim(),
        data.password,
      );

      let uid = userCreed.user.uid;
      let obj = new TeacherModel();
      obj.TeacherName = data.TeacherName.trim();
      obj.TeacherID = data.TeacherId.trim();
      obj.Email = data.email.trim();
      obj.Password = data.password.trim();
      await setDoc(doc(db, dbpath, uid), { ...obj });

      await setDoc(doc(db, "users", uid), { ...obj });
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
      Obj.TeacherID = data.TeacherID.trim();
      Obj.TeacherName = data.TeacherName.trim();
      Obj.Email = data.email.trim();
      Obj.Password = data.password.trim();
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
  async AccessTeacher(uid) {
    const snapshot = await getDoc(doc(db, dbpath, uid));

    return snapshot.exists() ? [snapshot.data()] : [];
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
      console.log(CateData.data());
    } catch (err) {
      console.log(err);
    }
  }
}

export default new TeacherServices();
