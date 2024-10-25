import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Athkar from "./components/athkar/Athkar";
import SunnahBooks from "./components/Sunna_books/SunnahBooks";
import Chapters from "./components/Sunna_books/Chapters";
import Ahadith from "./components/Sunna_books/Ahadith";
import Fav from "./components/Fav/Fav";
import DuaaPage from "./components/Duaa/DuaaPage";
import Feedback from "./components/feedback/Feedback";
import { useState } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { openNavBarContext } from "../contexts/openNavBarContext";
function App() {
  //state de dark mode et de barre de navigation:
  const [darkMode, setDarkMode] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <DarkModeContext.Provider
        value={{
          state: darkMode,
          setState: setDarkMode,
        }}
      >
        <openNavBarContext.Provider
          value={{
            state: openNav,
            setState: setOpenNav,
          }}
        >
          {/*======================== routes ==========================*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/Duaa" element={<DuaaPage />} />
            <Route path="/athkar" element={<Athkar />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route
              path="/Aboutus"
              element={<h1>Welcome to About us Page</h1>}
            />
            <Route path="/SunnaBooks" element={<SunnahBooks />} />
            <Route path="/SunnaBooks/:bookSlug" element={<Chapters />} />
            <Route
              path="/SunnaBooks/:bookSlug/:chapterNumber"
              element={<Ahadith />}
            />
          </Routes>
        </openNavBarContext.Provider>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
