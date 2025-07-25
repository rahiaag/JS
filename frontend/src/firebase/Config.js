import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC11szzYpVlt5xH1O56mFPqyYAw_mCH45k",
  authDomain: "vendor-e7063.firebaseapp.com",
  projectId: "vendor-e7063",
  storageBucket: "vendor-e7063.firebasestorage.app",
  messagingSenderId: "441253704823",
  appId: "1:441253704823:web:d776da9d591403eeed8272",
  measurementId: "G-KX4V1WRTPC"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider()