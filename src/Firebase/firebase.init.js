import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const intializeAuthentication = () =>{
     initializeApp(firebaseConfig);
}

export default intializeAuthentication;