
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Components/Firebase/Firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
const [loader, setLoader] = useState(true)
 const [user, setUser] = useState()
const signUp = (email, password) =>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth , email,password)
} 

const signIn = (email, password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email, password)
}

const logOut =()=>{
    setLoader(true)
    return signOut(auth)
}
const provider = new GoogleAuthProvider()

 const signInWithGoogle =()=>{
    return signInWithPopup(auth, provider)
    .then(() =>{
        console.log("log in successfully");
    })
    .catch(error =>{
        console.log('login in failed', error);
    })
 }
const gitProvider = new GithubAuthProvider()
 const signInWithGithub =()=>{
    return signInWithPopup(auth, gitProvider)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{
        console.log(error);
    })
 }
 useEffect(()=>{
    const unSubscribed = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
        setLoader(false)
    })

    return () => {
        unSubscribed()
    }
 },[])
 
 const authInfo = {
    signUp,
    signIn,
    user,
    logOut,
    signInWithGoogle,
    loader,
    signInWithGithub

 }
 
 return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
