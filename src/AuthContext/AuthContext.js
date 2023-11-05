import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


export const context = createContext();
const auth = getAuth(app)

const AuthContext = ({children}) => {

    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);



    const googleSignIn = (provider) => {
        return signInWithPopup(auth,provider);
    }

    const facebookSignIn = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    
    const emailPasswordSingUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const updateUser = () =>{
        return updateProfile(user);
    }


    const logout = ()=>{
        setLoader(true);
        return signOut(auth);
    }
    
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser);
            }
        })
        return () =>  unsubscribe();
    }, [])



    const authInfo = {
        googleSignIn,
        facebookSignIn,
        emailPasswordSingUp,
        logout,
        user,
        setUser,
        updateUser,
        loader, 
        setLoader,
    }


    return (
        <context.Provider value={authInfo}>
            {children}
        </context.Provider>
    );
};

export default AuthContext;