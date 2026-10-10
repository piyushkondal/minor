import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import AuthService from "./AuthService";

const USERS_PATH = "users";

// Change this if your backend uses another URL or port.
const API_BASE_URL = " http://localhost:5175/api/auth";

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

  // Send a six-digit OTP to the student's email.
  async sendRegistrationOtp(email) {
    const response = await fetch(`${API_BASE_URL}/send-registration-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Unable to send OTP.");
    }

    return result;
  }

  // Verify the OTP entered by the student.
  async verifyRegistrationOtp(email, otp) {
    const response = await fetch(`${API_BASE_URL}/verify-registration-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        otp: otp.trim(),
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Invalid or expired OTP.");
    }

    return result;
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
      contact: data.contact?.trim() || "",
      Course: data.Course.trim(),
      profile: "",
      userType: 2,
      status: true,
      createdAt: new Date(),
    };

    await setDoc(doc(db, USERS_PATH, uid), studentData);

    AuthService.setData(studentData, uid);
    return 2;
  }

  // Do not create teacher/admin accounts from a public browser method.
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
