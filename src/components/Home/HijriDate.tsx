//importations de react
import { useEffect, useState } from "react";
//importation de moment (bibliothèque)
import moment from "moment";
//importation de axios (bibliothèque)
import axios from "axios";
//importation de types
import { hijriDateType } from "../../types/HijriTypes";
//importation de fichier css
import "../../styles/home/HijriDate.css";

const HijriDate = () => {
  //state pour la date
  const [hijriDate, setHijriDate] = useState({} as hijriDateType);
  // API CALL (appel API)
  useEffect(() => {
    /*La longitude et la latitude sont utilisées pour spécifier les coordonnées géographiques 
      d'un point sur la surface de la Terre.
      **dans l'appel de l'API, longitude  et latitude sont des paramètres de requête (query parameters)**
    */
    //getRes est une fonction asynchrone
    const getRes = async () => {
      let response = await axios.get(
        `http://api.aladhan.com/v1/calendar/${moment().format(
          "YYYY"
        )}/${moment().format("MM")}?latitude=36.737232&longitude=3.086472`
      );
      //affectant l'API response à l'État de la date
      setHijriDate(
        response.data.data[Number(moment().format("DD")) - 1].date.hijri
      );
    };
    getRes();
  },[]);

  // const HijriDateContent = () => {
  return (
    <div dir="rtl" className="cont">
      <h1>{hijriDate.day}</h1>
      <h1>{hijriDate.month && hijriDate.month.ar}</h1>
      <h1>{hijriDate.year}</h1>
    </div>
  );
  // };

  // return HijriDateContent();
};

export default HijriDate;
