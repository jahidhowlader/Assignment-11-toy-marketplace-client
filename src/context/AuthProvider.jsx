import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User with firebase
    const createUser = (email, password) => {

        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signin User with firebase
    const signinUser = (email, password) => {

        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google signin user with firebase
    const googleSignin = () => {

        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    // Logout with firebase
    const logout = () => {
        
        setLoading(false)
        return signOut(auth)
    }

    // User Overbation when signin and signout
    useEffect(()=> {

        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => {
            return unsubscriber
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signinUser,
        googleSignin,
        logout
    }




    return (
        <AuthContext.Provider
            value={authInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;