import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

// Custom hook to access the authentication context
export function useAuthContext() {
    return useContext(authContext);
}

export const AuthProvider = ({ children }) => {
    
    const [authState, setAuthState] = useState({
        user: null,
        pwd: null,
        isAuthenticated: false,
        accessToken: null,
        roles: null,
    });

    const setAuth = ({ user, pwd, roles, accessToken }) => {
        setAuthState({
            user,
            pwd,
            isAuthenticated: true,
            accessToken,
            roles,
        })
    }

    const logout = () => {
        setAuthState({
            user: null,
            pwd: null,
            isAuthenticated: false,
            accessToken: null,
            roles: null,
        })
    }

    return (
        <AuthContext.Provider value={{ ...authState, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;