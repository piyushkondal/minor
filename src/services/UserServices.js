import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import AuthService from "./AuthService";
import { UserModel } from "../model/UserModel";
import { TeacherModel } from "../model/TeacherModel";

const dbPath = "users";

class UserServices {
  async Login(email, password) {
    try {
      let userCreed = await signInWithEmailAndPassword(auth, email, password);

      // signInWithEmailAndPassword(auth, email, password)

      const uid = userCreed.user.uid;

      let userDocs = await getDoc(doc(db, dbPath, uid));
      const userData = userDocs.data();

      AuthService.setData(userData, uid);

      if (userData.userType == 1) {
        return 1;
      } else if (userData.userType == 2) {
        return 2;
      } else if (userData.userType == 3) {
        return 3;
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
      let userCreed = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      let uid = userCreed.user.uid;

      let obj = new UserModel();
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
      let userCreed = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      let uid = userCreed.user.uid;

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

  async AllUsers() {
    try {
      let alluser = await getDocs(collection(db, dbPath));

      let userdata = alluser.docs.map((el) => {
        return { id: el.id, ...el.data() };
      });
      return userdata;
    } catch (error) {
      console.log(error);
    }
  }

  async AccessUsers(uid) {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        return [userDoc.data()];
      } else {
        console.log("No such user!");
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
export default new UserServices();
