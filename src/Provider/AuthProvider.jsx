import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser =(email , password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    const signUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // observer user auth state
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return () => {
            return unSubscribed()
        }
    },[])

    const logOut =()=>{
        return signOut(auth)
    }
     const userAuth = {
        user,
        createUser,
        signUser,
        logOut
    }
    return (
        <AuthContext.Provider value={userAuth}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;