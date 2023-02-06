<<<<<<< Updated upstream
import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();
export const UpdateThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useUpdateTheme = () => {
    return useContext(UpdateThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => setDarkTheme(!darkTheme);

    return (
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={toggleTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
=======
import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();
export const UpdateThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useUpdateTheme = () => {
    return useContext(UpdateThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => setDarkTheme(!darkTheme);

    return (
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={toggleTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
>>>>>>> Stashed changes
}