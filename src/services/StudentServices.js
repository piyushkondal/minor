import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { StudentModel } from "../model/StudentModel";
import AuthService from "./AuthService";
import { TeacherModel } from "../model/TeacherModel";

const dbPath = "users";
class StudentServices {
  async Login(email, password) {
    try {
      let userCreed = await signInWithEmailAndPassword(auth, email, password);

      // signInWithEmailAndPassword(auth, email, password)

      const uid = userCreed.user.uid;

      let StudentDocs = await getDoc(doc(db, dbPath, uid));
      const StudentData = StudentDocs.data();

      AuthService.setData(StudentData, uid);

      if (StudentData.StudentType == 1) {
        return 1;
      } else if (StudentData.StudentType == 2) {
        return 2;
      } else {
        return 0;
      }

      // console.log(userCreed.user.uid);
      // getDoc
    } catch (err) {
      console.log(err);
    }
  }

  async Register(data) {
    try {
      let StudentCreed = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      let uid = StudentCreed.Student.uid;

      let obj = new StudentModel();
      obj.name = data.name;
      obj.email = data.email;
      obj.contact = data.contact;
      obj.profile = data.profile;
      obj.Course = data.Course;

      let data1 = { ...obj };
      AuthService.setData(data1, uid);

      await setDoc(doc(db, dbPath, uid), data1);

      return 1;
    } catch (err) {
      console.log(err);
    }
  }
  async Register2(data) {
    try {
      let StudentCreed = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      let uid = StudentCreed.Student.uid;

      let obj = new TeacherModel();
      obj.TeacherName = data.TeacherName;
      obj.Email = data.email;
      obj.Password = data.password;
      obj.TeacherID = data.TeacherID;

      let data1 = { ...obj };
      AuthService.setData(data1, uid);

      await setDoc(doc(db, dbPath, uid), data1);

      return 1;
    } catch (err) {
      console.log(err);
      return 0;
    }
  }

  async AllStudents() {
    try {
      let AllStudents = await getDocs(collection(db, dbPath));

      let StudentData = AllStudents.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });
      return StudentData;
    } catch (error) {
      console.log(error);
    }
  }

  async AccessStudent(uid) {
    try {
      const StudentDoc = await getDoc(doc(db, "Students", uid));
      if (StudentDoc.exists()) {
        return [StudentDoc.data()];
      } else {
        console.log("No such Student!");
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
export default new StudentServices();
