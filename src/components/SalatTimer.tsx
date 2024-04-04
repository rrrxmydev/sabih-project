import { useEffect,useState } from "react";
import moment, { duration } from "moment";
import axios from "axios";

type remainedTimeType = {
    time:string,
    name:string,
}

type durationRemainedType = {
    hours : number,
    minuts:number,
    seconds:number,
}


const SalatTimer = ()=>{

    const [nextPrayer , setNextPrayer] = useState({} as remainedTimeType);
    const [Duration , setDuration] = useState({} as durationRemainedType);

    
    useEffect(()=>{
        const getRes = async () =>{
            let response = await axios.get(`http://api.aladhan.com/v1/calendar/${moment().format("YYYY")}/${moment().format("MM")}?latitude=36.737232&longitude=3.086472`);
            let timings = response.data.data[Number(moment().format("DD")) - 1].timings;
            let timesArr:remainedTimeType[]= [
                {time : timings.Fajr.substring(0,6),name:'الفجر'},
                {time: timings.Dhuhr.substring(0,6), name:'الظهر'},
                {time : timings.Asr.substring(0,6),name:'العصر'},
                {time:timings.Maghrib.substring(0,6),name:'المغرب'},
                {time : timings.Isha.substring(0,6),name:'العشاء'},
            ]

        if(
          moment().isAfter(moment(timesArr[0].time,'hh:mm')) &&
          moment().isBefore(moment(timesArr[1].time,'hh:mm'))    
      ){
          setNextPrayer(timesArr[1]);
      }else if (
          moment().isAfter(moment(timesArr[1].time,'hh:mm')) &&
          moment().isBefore(moment(timesArr[2].time,'hh:mm')) 
    
      ){
          setNextPrayer(timesArr[2]);    
      }else if(
          moment().isAfter(moment(timesArr[2].time,'hh:mm')) &&
          moment().isBefore(moment(timesArr[3].time,'hh:mm')) 
      ){
          setNextPrayer(timesArr[3]);
        }else if(
            moment().isBefore(moment(timesArr[4].time,'hh:mm')) &&
            moment().isAfter(moment(timesArr[3].time,'hh:mm')) 
      ){
          setNextPrayer(timesArr[4]);
        }else{
            setNextPrayer(timesArr[0]);
        }

        }
        getRes();
    },[])
        
        
        
        useEffect(()=>{
            const interval = setInterval(()=>{
                let remainingTime =moment(nextPrayer.time,"hh:mm").diff(moment());

                if(remainingTime < 0 ){
                    const midNightDiff = moment("23:59:59","hh:mm:ss").diff(moment());
                    const FajrToMidnightDiff = moment(nextPrayer.time,"hh:mm").diff(moment("00:00","hh:mm"));
                    const TotalDiff = midNightDiff + FajrToMidnightDiff;

                    remainingTime = TotalDiff;
                }
                let durationRemainingTime = moment.duration(remainingTime);

                setDuration({
                    hours:durationRemainingTime.hours(),
                    minuts:durationRemainingTime.minutes(),
                    seconds:durationRemainingTime.seconds(),
                });

            },1000)

        return ()=>{
            clearInterval(interval);
        }
    })

    return(
        <div dir="rtl" className="
            translate-y-[-25%]
            // meduim
            md:translate-x-[30%]
            md:translate-y-[150%]
        ">

            <h1 className="text-xl font-bold translate-x-[-27%] md:text-2xl md:translate-y-[-800%] md:translate-x-[-70%]"> الوقت المتبقي لصلاة {nextPrayer.name} :</h1>
            <h1 className="text-4xl font-semibold translate-x-[-40%] translate-y-[23%] md:text-6xl md:translate-x-[-78%] md:translate-y-[-400%] ">   {Duration.hours}سا  {Duration.minuts}د   {Duration.seconds}ثا </h1>
        </div>
    )
}

export default SalatTimer;