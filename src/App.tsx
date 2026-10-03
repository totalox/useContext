import ComponentA from "./ComponentA.tsx";
import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export default function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("tema") || "light"
  }
 );

  useEffect(() => {
    localStorage.setItem("tema" ,theme)
  }, [theme]
);
    
  return (
    <>
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Click</button>
      <ComponentA/>
    </ThemeContext.Provider>
    </>
  )
}