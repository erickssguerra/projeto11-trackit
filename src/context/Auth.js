import React, { createContext, useState } from "react";

export const AuthContext = createContext({});



function AuthProvider({ children }) {

    const [token, setToken] = useState("");
    const [image, setImage] = useState("");
    const [username, setUsername] = useState("")

    return (
        <AuthContext.Provider value={{ token, setToken, image, setImage, username, setUsername }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;