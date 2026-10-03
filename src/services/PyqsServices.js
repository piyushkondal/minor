import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { PyqsModel } from "../model/PyqsModel";

const dbPath = "Pyq";

class PyqsServices {
  async Add(data) {
    console.log(data);

    try {
      let obj = new PyqsModel();
      obj.PyqsID = data.PyqsID;
      obj.GroupId = data.GroupId;
      obj.SubjectName = data.SubjectName;
      obj.Year = data.Year;
      obj.ExamType = data.ExamType;
      obj.FileUrl = data.FileUrl;
      obj.UploadedBy = data.UploadedBy;
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
      obj.PyqsID = data.PyqsID;
      obj.GroupId = data.GroupId;
      obj.SubjectName = data.SubjectName;
      obj.Year = data.Year;
      obj.ExamType = data.ExamType;
      obj.FileUrl = data.FileUrl;
      obj.UploadedBy = data.UploadedBy;
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
      let MaterialDocs = await getDocs(collection(db, dbPath));
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

export default new PyqsServices();
