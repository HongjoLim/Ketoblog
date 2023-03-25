import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const login = async (user) => {
        try {
            const res = await axios.post('/api/auth/login', user);
            setCurrentUser(res.data);
        } catch (err) {
            throw err;
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout');
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};