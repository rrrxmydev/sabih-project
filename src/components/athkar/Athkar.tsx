//components
import Thikr from "./Thikr";
import NavBar from "../NavBar";
import { thikrType } from "../../types/ThikrTypes";
//REACT
import { useEffect, useState, useContext } from "react";
//uuid
import { v4 as uuidv4 } from "uuid";
//Contexts
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import { openNavBarContext } from "../../../contexts/openNavBarContext";
//Material ICONS
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
//react router dom
import { Link } from "react-router-dom";
//axios
import axios from "axios";
// CSS
import "../../styles/athkar/athkar.css";
import "../../styles/nav.css";

const Athkar = () => {
  //récupération de contexts
  const openNav = useContext(openNavBarContext);
  const darkMode = useContext(DarkModeContext);

  useEffect(() => {
    openNav.state ? openNav.setState(false) : "";
  }, []);
  //states :
  const [thikrName, setThikrName] = useState("AthkarSabah");
  const [thikr, setThikr] = useState([] as thikrType[]);
  const [reset, setReset] = useState(false);
  // si le mode nuit est activé, la couleur sera "white" sinon "#200E3A"
  const menuColor = darkMode.state ? "white" : "#200E3A";
  //appeler l'API pour obtenir la liste de thikr
  const getThikr = async () => {
    const response = await axios.get(
      `http://localhost:3000/sabihAPI/v1/get${thikrName}`
    );
    setThikr(response.data.data);
  };
  //la fonction getThikr appelée uniquement si l'état"thikrName" change
  useEffect(() => {
    getThikr();
  }, [thikrName]);

  const handleClick = () => {
    reset ? setReset(false) : setReset(true);
  };
  return (
    <div className={darkMode.state ? "dark" : ""}>
      <div className=" dark:bg-blue1 overflow-x-hidden">
        <h1 className="athkar_Title">أذكار</h1>
        {/* Menu */}
        <div
          className="navBarContainer"
          onClick={() => {
            openNav.state ? openNav.setState(false) : openNav.setState(true);
          }}
        >
          {openNav.state ? (
            <CloseRoundedIcon
              className="md:translate-y-[-53%]"
              sx={{ fontSize: "50px", color: menuColor }}
            />
          ) : (
            <MenuRoundedIcon
              className="md:translate-y-[-53%]"
              sx={{ fontSize: "50px", color: menuColor }}
            />
          )}
        </div>
        {/* bouton de réinitialisation */}
        <button onClick={handleClick} className="resetButton">
          إعادة ضبط
        </button>
        {/* bouton revenir en arrière */}
        <Link to="/">
          <button className="goBackButton">
            <ArrowBackRoundedIcon fontSize="large" />
          </button>
        </Link>

        <select
          dir="rtl"
          className="selectThikr"
          onChange={(e) => setThikrName(e.target.value)}
        >
          <option value="AthkarSabah">أذكار الصباح</option>
          <option value="AthkarMasaa">أذكار المساء</option>
          <option value="AthkarNawm">أذكار النوم</option>
          <option value="AthkarSalat">أذكار الصلاة</option>
        </select>

        {/*mappage du tableau de dhikr*/}
        {thikr.map((element) => {
          return (
            <Thikr
              script={element.script}
              fadl={element.fadl}
              repete={element.repete}
              reset={reset}
              key={uuidv4()}
            />
          );
        })}
      </div>
      {/* barre de navigation */}
      <div className={openNav.state ? "navOpened" : "navClosed"}>
        {openNav.state ? <NavBar /> : ""}
      </div>
    </div>
  );
};

export default Athkar;
