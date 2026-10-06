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
import { AssignmentsModel } from "../model/AssignmentsModel";

const dbPath = "Assignment";

class AssignmentServices {
  async Add(data) {
    try {
      let obj = new AssignmentsModel();
      obj.AssignmentID = data.AssignmentID || Date.now().toString();
      obj.GroupId = data.GroupId;
      obj.SubjectName = data.SubjectName;
      obj.Title = data.Title;
      obj.Description = data.Description;
      obj.TeacherID = data.TeacherID;
      obj.image = data.image;
      obj.DueDate = data.DueDate;

      console.log(data);
      console.log(obj);
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
      let obj = new AssignmentsModel();
      obj.AssignmentID = data.AssignmentID || Date.now().toString();
      obj.GroupId = data.GroupId;
      obj.SubjectName = data.SubjectName;
      obj.Title = data.Title;
      obj.Description = data.Description;
      obj.TeacherID = data.TeacherID;
      obj.FileUrl = data.FileUrl;

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
      let AssignmentDocs = await getDocs(collection(db, dbPath));
      let AssignmentData = AssignmentDocs.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });

      return AssignmentData;
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

export default new AssignmentServices();
