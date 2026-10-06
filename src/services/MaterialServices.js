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
import { MaterialsModel } from "../model/MaterialsModel";

const dbPath = "materials";

class MaterialServices {
  async Add(data) {
    console.log(data);

    try {
      let obj = new MaterialsModel();
      obj.MaterialID = data.MaterialID;
      obj.GroupId = data.GroupId;
      obj.SubjectName = data.SubjectName;
      obj.Title = data.Title;
      obj.FileUrl = data.FileUrl;
      obj.TeacherID = data.TeacherID;
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
      let obj = new MaterialsModel();
      obj.MaterialID = data.MaterialID;
      obj.GroupId = data.GroupId;
      obj.SubjectName = data.SubjectName;
      obj.Title = data.Title;
      obj.FileUrl = data.FileUrl;
      obj.TeacherID = data.TeacherID;
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
      let MaterialDocs = null;

      if (!!payload) {
        MaterialDocs = await getDocs(
          query(collection(db, dbPath), where(key, "==", payload.value)),
        );
      } else {
        MaterialDocs = await getDocs(collection(db, dbPath));
      }
      let MaterialData = MaterialDocs.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });

      return MaterialData;
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
      let MaterialData = await getDoc(doc(db, dbPath, id));
      return MaterialData.data();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new MaterialServices();
