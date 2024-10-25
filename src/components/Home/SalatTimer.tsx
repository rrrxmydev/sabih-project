//====================importations de react============================
import { useEffect, useState } from "react";
// importations de moment et axios (bibliothèques)
import moment from "moment";
import axios from "axios";
//css
import "../../styles/home/Salat.css";
//======================types======================
type remainedTimeType = {
  time: string;
  name: string;
};

type durationRemainedType = {
  hours: number;
  minuts: number;
  seconds: number;
};

const SalatTimer = () => {
  //states :
  const [nextPrayer, setNextPrayer] = useState({} as remainedTimeType);
  const [Duration, setDuration] = useState({} as durationRemainedType);
  //appeler l'API pour obtenir les horaires de prière
  const getRes = async () => {
    let response = await axios.get(
      `http://api.aladhan.com/v1/calendar/${moment().format(
        "YYYY"
      )}/${moment().format("MM")}?latitude=36.737232&longitude=3.086472`
    );
    let timings = response.data.data[Number(moment().format("DD")) - 1].timings;
    let timesArr: remainedTimeType[] = [
      { time: timings.Fajr.substring(0, 6), name: "الفجر" },
      { time: timings.Dhuhr.substring(0, 6), name: "الظهر" },
      { time: timings.Asr.substring(0, 6), name: "العصر" },
      { time: timings.Maghrib.substring(0, 6), name: "المغرب" },
      { time: timings.Isha.substring(0, 6), name: "العشاء" },
    ];
    //Déterminez la prochaine prière
    /*la fonction moment().ifAfter() 
      Spécifie si l'heure actuelle est postérieure à l'heure indiquée comme paramètre
    */
    /*
      la fonction moment().isBefore()
      Spécifie si l'heure actuelle est antérieure à l'heure donnée
    */
    if (
      moment().isAfter(moment(timesArr[0].time, "hh:mm")) &&
      moment().isBefore(moment(timesArr[1].time, "hh:mm"))
    ) {
      setNextPrayer(timesArr[1]);
    } else if (
      moment().isAfter(moment(timesArr[1].time, "hh:mm")) &&
      moment().isBefore(moment(timesArr[2].time, "hh:mm"))
    ) {
      setNextPrayer(timesArr[2]);
    } else if (
      moment().isAfter(moment(timesArr[2].time, "hh:mm")) &&
      moment().isBefore(moment(timesArr[3].time, "hh:mm"))
    ) {
      setNextPrayer(timesArr[3]);
    } else if (
      moment().isBefore(moment(timesArr[4].time, "hh:mm")) &&
      moment().isAfter(moment(timesArr[3].time, "hh:mm"))
    ) {
      setNextPrayer(timesArr[4]);
    } else {
      setNextPrayer(timesArr[0]);
    }
  };

  useEffect(() => {
    //l'appel de la fonction
    getRes();
  }, []);

  useEffect(() => {
    //Spécifie si l'heure actuelle est antérieure à l'heure donnée
    //nous appliquons ce code chaque seconde !
    const interval = setInterval(() => {
      /*cette fonction Calcule la différence de durée entre l'heure actuelle
       et l'heure de la prochaine prière
      */
      let remainingTime = moment(nextPrayer.time, "hh:mm").diff(moment());
      //Si l'heure actuelle est avant minuit, nous appliquons ce code
      if (remainingTime < 0) {
        const midNightDiff = moment("23:59:59", "hh:mm:ss").diff(moment());
        const FajrToMidnightDiff = moment(nextPrayer.time, "hh:mm").diff(
          moment("00:00", "hh:mm")
        );
        const TotalDiff = midNightDiff + FajrToMidnightDiff;

        remainingTime = TotalDiff;
      }
      let durationRemainingTime = moment.duration(remainingTime);
      //mise à jour de l'état
      setDuration({
        hours: durationRemainingTime.hours(),
        minuts: durationRemainingTime.minutes(),
        seconds: durationRemainingTime.seconds(),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div dir="rtl" className="containerStyle">
      <h1> الوقت المتبقي لصلاة {nextPrayer.name} :</h1>
      <h1 className="durationStyle">
        {" "}
        {Duration.hours}سا {Duration.minuts}د {Duration.seconds}ثا{" "}
      </h1>
    </div>
  );
};

export default SalatTimer;
