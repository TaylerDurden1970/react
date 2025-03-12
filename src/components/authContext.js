import React, { createContext, useContext, useState } from "react";
import usersData from "./users.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        const user = usersData.users.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            setUser(user);
            return true;
        }
        return false;
    };

    const register = (email, password, name) => {
        const existingUser = usersData.users.find((u) => u.email === email);
        if (existingUser) {
            return false;
        }
        const newUser = { email, password, name };
        usersData.users.push(newUser);
        setUser(newUser);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
