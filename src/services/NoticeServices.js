import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { NoticesModel } from "../model/NoticesModel";

const dbPath = "announcement";

class NoticeServices {
  async Add(data) {
    console.log(data);

    try {
      let obj = new NoticesModel();
      obj.NoticeID = data.NoticeID;
      obj.GroupId = data.GroupId;
      obj.Title = data.Title;
      obj.Description = data.Description;
      obj.FileUrl = data.FileUrl;
      obj.TeacherID = data.TeacherID;
      // obj.Action= data.Action

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
      let obj = new NoticesModel();
      obj.NoticeID = data.NoticeID;
      obj.GroupId = data.GroupId;
      obj.Title = data.Title;
      obj.Description = data.Description;
      obj.FileUrl = data.FileUrl;
      obj.TeacherID = data.TeacherID;
      // obj.Action= data.Action
      await updateDoc(doc(db, dbPath, id), { ...obj });

      return 1;
    } catch (err) {
      console.log(err);
      return 0;
    }

    //console.log(data);
  }

  async All(payload, key) {
    try {
      let NoticeDocs = null;
      if (!!payload) {
        NoticeDocs = await getDocs(
          query(collection(db, dbPath), where(key, "==", payload.value)),
        );
      } else {
        NoticeDocs = await getDocs(collection(db, dbPath));
      }
      let NoticeData = NoticeDocs.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });

      return NoticeData;
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

  async single(id) {
    try {
      let NoticeData = await getDoc(doc(db, dbPath, id));
      return NoticeData.data();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new NoticeServices();
