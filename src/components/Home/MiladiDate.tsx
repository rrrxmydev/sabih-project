//====================importations de react============================
import { useEffect, useState } from "react";
//====================importation de moment============================
import moment from "moment";
//====================importation de axios============================
import axios from "axios";
//====================importation de fichier css============================
import "../../styles/home/MiladiDate.css";

const MiladiDate = () => {
  //state
  const [day, setDay] = useState("");
  //// API CALL (appel API)
  useEffect(() => {
    //la fonction getRes
    const getRes = async () => {
      let response = await axios.get(
        `http://api.aladhan.com/v1/calendar/${moment().format(
          "YYYY"
        )}/${moment().format("MM")}?latitude=36.737232&longitude=3.086472`
      );
      setDay(
        response.data.data[Number(moment().format("DD")) - 1].date.hijri.weekday
          .ar
      );
    };

    //l'appel de la fonction
    getRes();
  }, []);
  //moment().format("YYYY-MM-DD") cette fonction renvoie la date d'aujourd'hui sous la forme AAAA-MM-JJ
  // Y-A:Year - année | M:month - mois |  D-J:Day - Jour
  return (
    <div dir="rtl" className="MiladiDateStyle">
      <div className="dayStyle">
        <h1>{day}</h1>
      </div>
      <h2 className="miladiDate">الموافق ل {moment().format("YYYY-MM-DD")}</h2>
    </div>
  );
};

export default MiladiDate;
