//importations de react
import { useContext } from "react";
//====================importations de composants========================
import HijriDate from "./HijriDate";
import MiladiDate from "./MiladiDate";
import SalatTimer from "./SalatTimer";
//==============================importations de MUI icons (materia UI icons c'est une bibliothèque) =========================================
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
//importations de contexts
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import { openNavBarContext } from "../../../contexts/openNavBarContext";
// importations de fichiers css
import "../../styles/home/Header.css";

const Header = () => {
  //récupération de contexts
  const darkMode = useContext(DarkModeContext);
  const openNav = useContext(openNavBarContext);

  //une fonction pour gérer le mode nuit
  function handleClick() {
    darkMode.state ? darkMode.setState(false) : darkMode.setState(true);
  }

  return (
    <div>
      <div className="con">
        <div
          className="Menu"
          onClick={() => {
            openNav.state ? openNav.setState(false) : openNav.setState(true);
          }}
        >
          {openNav.state ? (
            // si l'utilisateur clique sur le bouton de la barre de navigation, cette icône apparaîtra
            <CloseRoundedIcon
              className="md:translate-y-[-53%]"
              sx={{ fontSize: "50px", color: "white" }}
            />
          ) : (
            // sinon
            <MenuRoundedIcon
              className="md:translate-y-[-53%]"
              sx={{ fontSize: "50px", color: "white" }}
            />
          )}
          {/* titre */}
          <h1>سبح</h1>
        </div>
        {/* button de mode nuit */}
        <div
          className=" md:translate-x-[1600px] md:translate-y-0 translate-x-[500px] translate-y-[20px] cursor-pointer w-8"
          onClick={handleClick}
        >
          {darkMode.state ? (
            <LightModeRoundedIcon sx={{ fontSize: "35px" }} />
          ) : (
            <DarkModeRoundedIcon sx={{ fontSize: "35px" }} />
          )}
        </div>
        {/* ===================== composants =============== */}
        <HijriDate />
        <MiladiDate />
        <SalatTimer />
        {/* ================================================= */}
      </div>
    </div>
  );
};

export default Header;
