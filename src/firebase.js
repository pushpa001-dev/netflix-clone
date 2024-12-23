
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc,collection, getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyC9DjQOxaetLPlcmgXPiGMKnkpGtF3Ak8k",
  authDomain: "netflix-clone-3feb7.firebaseapp.com",
  projectId: "netflix-clone-3feb7",
  storageBucket: "netflix-clone-3feb7.firebasestorage.app",
  messagingSenderId: "1051243423160",
  appId: "1:1051243423160:web:8c854da292da455f1edb4d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name ,email, password) => {
   try {
   const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      
    })
   } catch (error) {
    console.log(error);
    toast(error.code.split('/')[1].split('-').join(" "))
   }
}
const login = async (email, password)=>{
  try {
    const loginDetails = await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem('ACCESS_TOKEN', loginDetails._tokenResponse.refreshToken)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
    
  }
}

const logout = () => {
  signOut(auth).then(()=>{
    sessionStorage.removeItem('ACCESS_TOKEN')
  });
}

export {signup,login,logout,auth,db};