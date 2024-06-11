import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    const register = (username, email, password, phone, fname) => {
        const newUser = { username, email, password, phone, fname };
        setUsers([...users, newUser]);
    };

    const login = (email, password) => {
        const existingUser = users.find(user => user.email === email && user.password === password);
        if (existingUser) {
            setUser(existingUser);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    const updateUser = (updatedData) => {
        setUser((prevUser) => ({
            ...prevUser,
            ...updatedData
        }));
        setUsers((prevUsers) => prevUsers.map(user => user.email === updatedData.email ? {...user, ...updatedData} : user));
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}
