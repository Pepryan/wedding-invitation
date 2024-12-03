import React, { createContext, useContext, useState } from 'react';
import { themes } from '@/config/theme-config';

type ThemeContextType = {
  currentTheme: typeof themes.dustyBlue;
  setTheme: (themeName: keyof typeof themes) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(themes.dustyBlue);

  const setTheme = (themeName: keyof typeof themes) => {
    setCurrentTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 