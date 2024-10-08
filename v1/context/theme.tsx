import React, { useState, useEffect } from 'react';

interface ContextType {
  black: boolean;
  toggleBlack: () => void;
}

const defaultState = {
  black: false,
  toggleBlack: () => {}
};

const ThemeContext = React.createContext<ContextType>(defaultState);

export function ThemeProvider({ children }) {
  const [black, setBlack] = useState(false);

  const toggleBlack = () => {
    let isBlack = !black;
    localStorage.setItem('isBlack', JSON.stringify(isBlack));
    setBlack(isBlack);
  };

  useEffect(() => {
    const localeBlack = JSON.parse(localStorage.getItem('isBlack'));
    if (localeBlack) {
      setBlack(localeBlack);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ black, toggleBlack: toggleBlack }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
