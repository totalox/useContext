import { useContext } from "react"
import { ThemeContext } from "./App.tsx";
export default function ComponentD () {

    const tema = useContext(ThemeContext);

    return (
        <>
            <div className={ tema === "light" ? "theme-light" : "theme-dark" }>
                Component D
            </div>
        </>
    )
}