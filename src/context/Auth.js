import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [token, setToken] = useState("");
    const [image, setImage] = useState("");
    const [username, setUsername] = useState("");
    const [update, setUpdate] = useState([]);
    const [concluded, setConcluded] = useState(0);

    return (
        <AuthContext.Provider value={{
            token, setToken,
            image, setImage,
            username, setUsername,
            update, setUpdate,
            concluded, setConcluded,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;