import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    // Initialize darkMode state from localStorage with a default value of false
    const [darkMode, setDarkMode] = useState(() => {
        // Using a function for initialization helps ensure this only runs once
        const storedValue = localStorage.getItem("darkMode");
        // Return false if no value exists, otherwise parse the stored value
        return storedValue ? JSON.parse(storedValue) : false;
    });

    // Toggle function to switch between light and dark modes
    const toggle = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Effect to handle theme changes and persist to localStorage
    useEffect(() => {
        // Store the current mode preference
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        
        // Optionally, you could also apply the theme to the document body
        document.body.classList.toggle('dark-theme', darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
};

DarkModeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DarkModeContextProvider;