import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import AuthService from "./AuthService";

const USERS_PATH = "users";

class UserServices {
  async Login(email, password) {
    const credential = await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password,
    );

    try {
      const uid = credential.user.uid;
      const userSnapshot = await getDoc(doc(db, USERS_PATH, uid));

      if (!userSnapshot.exists()) {
        throw new Error(
          "Your account profile was not found. Contact the admin.",
        );
      }

      const userData = userSnapshot.data();

      if (![1, 2, 3].includes(Number(userData.userType))) {
        throw new Error(
          "Your account role is not configured. Contact the admin.",
        );
      }

      if (userData.status === false) {
        throw new Error("Your account is inactive. Contact the admin.");
      }

      AuthService.setData(userData, uid);
      return Number(userData.userType);
    } catch (error) {
      await signOut(auth);
      throw error;
    }
  }

  async Register(data) {
    const credential = await createUserWithEmailAndPassword(
      auth,
      data.email.trim(),
      data.password,
    );

    const uid = credential.user.uid;

    // Store profile information in Firestore, NEVER the password.
    const studentData = {
      name: data.name.trim(),
      email: data.email.trim(),
      rollNumber: data.rollNumber.trim(),
      contact: data.contact.trim(),
      Course: data.Course.trim(),
      profile: "",
      userType: 2,
      status: true,
      createdAt: new Date(),
    };

    // If this fails, surface the error rather than reporting a successful
    // registration with a missing Firestore profile.
    await setDoc(doc(db, USERS_PATH, uid), studentData);

    AuthService.setData(studentData, uid);
    return 2;
  }

  // Do not create teacher/admin accounts from a public browser method.
  // Move privileged account creation to a trusted admin backend.
  async Register2() {
    throw new Error(
      "Teacher accounts must be created through a trusted admin process.",
    );
  }

  async AllUsers() {
    const snapshot = await getDocs(collection(db, USERS_PATH));
    return snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
  }

  async AccessUsers(uid) {
    const snapshot = await getDoc(doc(db, USERS_PATH, uid));
    return snapshot.exists() ? [snapshot.data()] : [];
  }
}

export default new UserServices();
