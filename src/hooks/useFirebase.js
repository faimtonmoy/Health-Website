import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword,
     createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import initializeAuth from "../Firebase/Firebase.initialize";

initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvide = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvide)

    }
    const signUpUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(() => {
    //             // Email verification sent!
    //             // ...
    //         });
    // }
    const updateUser= (name)=>{
        console.log(name);
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
            console.log("Profile updated!");
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);


            }

        });
    }, [])
    return {
        user,
        signInUsingGoogle,
        logOut,
        signInUsingEmail,
        signUpUsingEmail,
        // verifyEmail,
        updateUser

    }



}
export default useFirebase;