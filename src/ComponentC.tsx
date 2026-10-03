import { useContext } from "react"
import { ThemeContext } from "./App.tsx";
export default function ComponentC () {

    const tema = useContext(ThemeContext);

    return (
        <>
            <div className={ tema === "light" ? "theme-light" : "theme-dark" } id="divc">
                Component C
            </div>
        </>
    )
}