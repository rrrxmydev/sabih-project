import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { hijriDateType } from "../types/HijriTypes";


const HijriDate = ()=>{
    const [hijriDate , setHijriDate] = useState({} as hijriDateType);  


    useEffect(()=>{
        const getRes = async () =>{
            let response = await axios.get(`http://api.aladhan.com/v1/calendar/${moment().format("YYYY")}/${moment().format("MM")}?latitude=36.737232&longitude=3.086472`);
            setHijriDate(response.data.data[Number(moment().format("DD")) - 1].date.hijri);
            // console.log(response.data.data[Number(moment().format("DD"))]);
        }
        getRes();
    },[])

    

    
    
    return(
        <div dir="rtl" className="
            translate-x-[-27%] translate-y-[35%]
            // meduim
            md:translate-y-[10%]
        ">
            <h1 className="font-semibold text-6xl tracking-tighter md:text-8xl md:mx-4">{hijriDate.day}</h1>
            <h1 className="font-semibold text-5xl tracking-tighter md:text-8xl md:mx-4">{hijriDate.month && hijriDate.month.ar}</h1>
            <h1 className="font-semibold text-6xl tracking-tighter md:text-8xl md:mx-4">{hijriDate.year}</h1>

        </div>
    )
}

export default HijriDate;