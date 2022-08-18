import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: false,
  toggleTheme: () => { }
});

interface IThemeProvider {
  children: JSX.Element
}

export function ThemeProvider({ children }: IThemeProvider) {

  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'true')

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', theme)
    document.body.classList.toggle('light', !theme)
    localStorage.setItem('theme', theme.toString())
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
