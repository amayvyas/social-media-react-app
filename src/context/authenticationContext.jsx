import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";


// Create and export the AuthContext
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null // Initialize from localStorage
    );

    // Function to log in the user
    const login = () => {
        // Create a user object
        const user = {
            id: 1,
            name: "John Doe",
            profilePic: "/bgForm.jpg", // Correct path for public folder
        };

        // Save the user data to localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Set the currentUser state
        setCurrentUser(user);
    };

    // Function to log out the user
    const logout = () => {
        setCurrentUser(null); // Clear user state
        localStorage.removeItem("user"); // Remove user data from localStorage
    };

    // Ensure that currentUser is stored in localStorage when it changes
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("user", JSON.stringify(currentUser)); // Store user in localStorage
        } else {
            localStorage.removeItem("user"); // Clear localStorage when user logs out
        }
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// PropTypes validation for children
AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensures that children is a valid React node
};

export default AuthContextProvider;
