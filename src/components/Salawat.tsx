import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { SalatTimes } from "../types/SalatTimes";
import Salat from "./Salat";


const Salawat =()=>{
    const salatTimesInit = {
        Fajr :"0:00",
        Dhuhr :"0:00",
        Asr :"0:00",
        Isha :"0:00",
        Maghrib :"0:00",
    }
    
    const [salatTimes , setSalatTimes] = useState(salatTimesInit as SalatTimes);
    useEffect(()=>{
        const getRes = async () =>{
            let response = await axios.get(`http://api.aladhan.com/v1/calendar/${moment().format("YYYY")}/${moment().format("MM")}?latitude=36.737232&longitude=3.086472`);
            let timings = response.data.data[Number(moment().format("DD")) - 1].timings;
            setSalatTimes(timings);
        }
        getRes();
    },[])

    return(
        <>
            <Salat name="الفجر" time={salatTimes.Fajr.substring(0,5)}/>
            <Salat name="الظهر" time={salatTimes.Dhuhr.substring(0,5)}/>
            <Salat name="العصر" time={salatTimes.Asr.substring(0,5) }/>
            <Salat name="المغرب" time={salatTimes.Maghrib.substring(0,5)}/>
            <Salat name="العشاء" time={salatTimes.Isha.substring(0,5)}/>
        </>
    );
}

export default Salawat;