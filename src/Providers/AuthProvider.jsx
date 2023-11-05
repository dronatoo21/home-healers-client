import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const createUser = (eamil, password) => {
        return createUserWithEmailAndPassword(Auth, eamil, password)
    }

    const loginUser = (eamil, password) => {
        return signInWithEmailAndPassword(Auth , eamil, password)
    }

    const googleLogin = (provider) => {
        return signInWithPopup(Auth, provider); 
    }

    const logout = () => {
        return signOut(Auth);
    }

    useEffect(()=>{
        const unsbsCribe = onAuthStateChanged(Auth, currentUser => {
            console.log('user in', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsbsCribe();
        }
    },[]);

    const authInfo = {loginUser, googleLogin, user, logout, createUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;