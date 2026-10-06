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
import { GroupModel } from "../model/GroupModel";

const dbPath = "groups";

class GroupServices {
  async Add(data) {
    console.log(data);

    try {
      let obj = new GroupModel();
      obj.GroupName = data.name;
      obj.CategoryID = data.CategoryID;
      obj.Description = data.description;
      obj.image = data.image;
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
      let obj = new GroupModel();
      obj.GroupName = data.name;
      obj.Description = data.description;
      obj.CategoryID = data.CategoryID;
      obj.image = data.image;
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
      let groupDocs = null;

      if (!!payload) {
        groupDocs = await getDocs(
          query(collection(db, dbPath), where(key, "==", payload.value)),
        );
      } else {
        groupDocs = await getDocs(collection(db, dbPath));
      }

      let groupData = groupDocs.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });

      return groupData;
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
      let CateData = await getDoc(doc(db, dbPath, id));

      return CateData.data();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new GroupServices();
