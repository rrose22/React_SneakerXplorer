import React, { createContext, useState, useContext } from 'react';

// Create a context for AuthProvider
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initially no user is logged in

  // Method to log in the user
  const login = (userData) => {
    // Logic to authenticate user, e.g., sending request to backend
    // Upon successful authentication, set the user
    setUser(userData);
  };

  // Method to log out the user
  const logout = () => {
    // Logic to log out the user, e.g., clearing session/local storage
    // Upon successful logout, set the user to null
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
