import { getAuth, signInWithPopup,  GoogleAuthProvider, onAuthStateChanged, signOut, initializeAuth } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import intializeAuthentication from "../Firebase/firebase.init";


intializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const SignInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
       
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    },[])

    const logOut = () =>{

        signOut(auth)
        .then(()=>{

            setUser({})

        })

    }

    return{
        user,
        error,
        SignInUsingGoogle,
        logOut,

        
    }

  
}

export default useFirebase;