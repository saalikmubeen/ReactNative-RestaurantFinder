import React, { createContext, useState } from "react";
import firebase from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const login = async (email, password) => {
        try {
            setLoading(true);
            await firebase.auth().signInWithEmailAndPassword(email, password);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const register = async (email, password, confirmPassword) => {
        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        }

        try {
            setLoading(true);
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const logout = async () => {
        await firebase.auth().signOut();
    };

    firebase.auth().onAuthStateChanged(function (userObj) {
        if (userObj) {
            setUser(userObj);
            setAuthLoading(false);
            setLoading(false);
            setError(null);
        } else {
            setUser(null);
            setAuthLoading(false);
        }
    });

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                login,
                register,
                logout,
                authLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
