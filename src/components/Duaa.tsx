import { useEffect, useState } from "react";
import axios from "axios";
const Duaa = ()=>{

    const [randomHadith, setRandomHadith] = useState("");

    const getRandomHadith = async ()=>{


        // let response = await axios.get(`https://www.hadithapi.com/api/hadiths?page=${Page}&chapter=${RandomChap}&apiKey=$2y$10$cAfz5l2iVZlMl7iZZGGTeiV1moZ2Gse7nKDS2GOztNj253uIqHS&book=${HadithSlugs[Math.random() * (HadithSlugs.length-1)]}`)

        // let response = await axios.get('https://www.hadithapi.com/api/hadiths?page=1&chapter=2&apiKey=$2y$10$cAfz5l2iVZlMl7iZZGGTeiV1moZ2Gse7nKDS2GOztNj253uIqHS&book=sahih-bukhari')

        // setRandomHadith(response.data.hadiths.data[1]);
    }

    useEffect(()=>{
        getRandomHadith();
    },[]);
    
    const HadithSlugs = ['sahih-muslim','sahih-bukhari','al-tirmidhi','abu-dawood','ibn-e-majah','sunan-nasai','mishkat','musnad-ahmad','al-silsila-sahiha'];
    const RandomChap = Math.floor(Math.random() * 14 +1);
    const Page = Math.floor(Math.random() * 5+1);

    // console.log(HadithSlugs[1] +" - "+RandomChap + " - " + Page);
    // console.log("test : " + randomHadith);
    return(
            <div className="
                border-blue1
                border-2
                rounded-md
                w-[80%]
                translate-x-[13%]
                flex
                flex-col
                justify-center
                items-center
                mb-[40px]
                md:w-[50%]
                md:translate-x-[53%]
                dark:border-[#FFFF]
            ">
                <div className="bg-[#FCFFF4] w-[100px] md:w-[120px]  flex items-center justify-center relative bottom-4 dark:bg-blue1">
                    <h1 className=" font-semibold text-xl text-blue1 md:text-2xl dark:text-[#FFFF]">دعاء اليوم</h1>
                </div>
                <div className=" w-full felx justify-center p-3 relative bottom-4 left-2 md:p-4" >
                    <p className=" text-blue2 text-xl font-semibold md:text-2xl dark:dark:text-[#FFFF]">بسم اللهِ وضعتُ جنبي، اللهم اغفر لي ذنبي، وأخْسئْ شيطاني، وفكَّ رِهاني، واجعلني في النديِّ الأعلى</p>
                </div>
            </div>
    );
}

export default Duaa;