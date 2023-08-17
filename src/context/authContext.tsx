import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

type INITIAL_STATE = {
    setUserActive: React.Dispatch<React.SetStateAction<string>>;
    userActive: string;
    currentUser: any;
};

export const AuthContext = createContext<INITIAL_STATE>({} as INITIAL_STATE);

export const AuthContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<User | null>();
    const initialValues = localStorage.getItem("user") || "";
    const [userActive, setUserActive] = useState(initialValues);

    useEffect(() => {
        let unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => {
            unsub();
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(userActive));
    }, [userActive]);

    return (
        <AuthContext.Provider
            value={{ currentUser, setUserActive, userActive }}
        >
            {children}
        </AuthContext.Provider>
    );
};
