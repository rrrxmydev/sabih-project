import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
const RamadanMiladiDate = ()=>{
    const [day , setDay] = useState("");

    useEffect(()=>{
        const getRes = async () =>{
            let response = await axios.get(`http://api.aladhan.com/v1/calendar/${moment().format("YYYY")}/${moment().format("MM")}?latitude=36.737232&longitude=3.086472`);
            setDay(response.data.data[Number(moment().format("DD")) - 1].date.hijri.weekday.ar);
        }
        getRes();
    },[])

    return(
        <div dir="rtl" className="
            translate-x-[-60%]
            translate-y-[10%]
            text-xl
            font-bold
            // meduim
            md:text-2xl
            md:translate-y-[120%]
        ">
            <div  className="
             w-[200px]
            text-6xl 
            translate-x-[65%]
            translate-y-[-130%] 
            flex
            justify-center
            items-center
            md:text-8xl
            md:translate-x-[85%]
            md:translate-y-[-380%]
            ">
                <h1 className="">{day}</h1>
            </div>
            <h2 className="translate-x-[14.5%] translate-y-[-230%] md:translate-x-[6.5%] md:translate-y-[-900%] md:text-3xl">الموافق ل {moment().format("YYYY-MM-DD")}</h2>
        </div>
    )
}

export default RamadanMiladiDate;