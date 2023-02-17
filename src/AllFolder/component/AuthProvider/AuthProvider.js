import app from "../../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";



export const authContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };

    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    };

    const googleLogin = (Provider) => {
        setLoading(true)
        return signInWithPopup(auth, Provider)
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

        })
        return unsubscribe;
    }, []);

    const authInfo = {

        user,
        loading,
        createUser,
        signUser,
        logOut,
        updateUser,
        googleLogin,
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>

        </div>
    );
};

export default AuthProvider;