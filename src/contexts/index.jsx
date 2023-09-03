import React, { useState, useContext, createContext } from "react";

// create a context
const AuthContext = createContext();

// 2nd step - creating the provider 
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};


// 3rd step - consume the context
export const useAuth = () => useContext(AuthContext);
 
