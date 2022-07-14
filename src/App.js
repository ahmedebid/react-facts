import {useState} from "react"
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {

    const [isDark, setIsDark] = useState(false)
    
    function toggleDarkMode() {
        setIsDark(prevIsDark => !prevIsDark)
    }

    return (
        <div className="container">
            <Navbar darkMode={isDark} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={isDark}/>
        </div>
    )
}