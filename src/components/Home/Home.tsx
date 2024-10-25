//====================importations de react============================
import { useContext, useEffect, useState } from "react";
//====================importations de contexts=========================
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import { openNavBarContext } from "../../../contexts/openNavBarContext";
//====================importations de composants========================
import Header from "./Header";
import Duaa from "../Duaa";
import Salawat from "./Salawat";
import NavBar from "../NavBar";
//============importation de axios========================
import axios from "axios";
//=============importations de fichiers css===============
import "../../App.css";
import "../../styles/home/Home.css";
import "../../styles/nav.css";
const Home = () => {
  //récupération de contexts
  const openNav = useContext(openNavBarContext);
  const darkMode = useContext(DarkModeContext);
  //state:
  const [randomDuaa, setRandomDuaa] = useState("");

  useEffect(() => {
    openNav.state ? openNav.setState(false) : "";
  }, []);

  //appeler l'API pour obtenir un duaa aléatoire
  const getRandomDuaa = async () => {
    const response = await axios.get(
      "http://localhost:3000/sabihAPI/v1/getRandomDuaa"
    );
    //affectant l'API response à l'État
    setRandomDuaa(response.data.data.script);
  };

  useEffect(() => {
    //l'appel de fonction
    getRandomDuaa();
  }, []);

  return (
    <div className={darkMode.state ? "dark" : ""}>
      <div className="HomeContainer">
        <Header />
        <Duaa script={randomDuaa} Title={"دعاء اليوم"} />
        <div className="salatHeader">
          <h1 className="">مواقيت الصلاة</h1>
        </div>
        <div className="center">
          <div className="salawatContainer">
            <Salawat />
          </div>
        </div>
      </div>
      <div className={openNav.state ? "navOpened" : "navClosed"}>
        {openNav.state ? <NavBar /> : <></>}
      </div>
    </div>
  );
};

export default Home;
