import { createContext } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const loginUser = (eamil, password) => {
        return signInWithEmailAndPassword(Auth , eamil, password)
    }

    const googleLogin = (provider) => {
        return signInWithPopup(Auth, provider); 
    }

    const authInfo = {loginUser, googleLogin}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;