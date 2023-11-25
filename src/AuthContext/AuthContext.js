import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


export const context = createContext();
const auth = getAuth(app)

const AuthContext = ({children}) => {

    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);
    const [_sid, setid] = useState(0);
    const [service, setService] = useState({});



    const googleSignIn = (provider) => {
        setLoader(true);
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


    const emailPasswordSignIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
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
                setLoader(false);
            }
        })
        return () =>  unsubscribe();
    }, [])



    const authInfo = {
        googleSignIn,
        facebookSignIn,
        emailPasswordSingUp,
        emailPasswordSignIn,
        logout,
        user,
        setUser,
        updateUser,
        loader, 
        setLoader,
        _sid, 
        setid,
        setService,
        service
    }


    return (
        <context.Provider value={authInfo}>
            {children}
        </context.Provider>
    );
};

export default AuthContext;