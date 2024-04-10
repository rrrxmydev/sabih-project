import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Athkar from "./components/Athkar";
import SunnahBooks from "./components/SunnahBooks";
import Chapters from "./components/Chapters";
import {useState } from "react";
import {DarkModeContext} from '../contexts/DarkModeContext';
function App() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div>
      <DarkModeContext.Provider value={{
        state:darkMode,
        setState:setDarkMode,
      }}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/athkar" element={<Athkar/>}/>
          <Route path="/SunnaBooks" element={<SunnahBooks/>}/>
          <Route path="/SunnahBooks/:bookSlug" element={<Chapters/>}/>
          <Route path="/Aboutus" element={<h1>Welcome to About us Page</h1>}/>
        </Routes>
      </DarkModeContext.Provider>
      
      
    </div>
  )
}

export default App;
