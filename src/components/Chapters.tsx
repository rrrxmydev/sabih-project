import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Link } from "react-router-dom";
import { chapterType } from "../types/SunnahTypes";
import Chapter from "./Chapter";
const Chapters = ()=>{
    const {bookSlug} = useParams();
    const [chapters , setChapter] = useState([] as chapterType[]);
    const getChapters = async()=>{
        const response = await axios.get(`https://www.hadithapi.com/api/${bookSlug}/chapters?apiKey=$2y$10$cAfz5l2iVZlMl7iZZGGTeiV1moZ2Gse7nKDS2GOztNj253uIqHS`)
        setChapter(response.data.chapters);
    }

    useEffect(()=>{
        getChapters();
    },[]);





    return(
        <div className="flex flex-col justify-center items-center font-changa">
            <div className="translate-y-5">
                <h1 className="text-4xl text-blue1 font-semibold">الكتب</h1>
                <Link to="/SunnaBooks"><button className='bg-blue2 text-[#FFFF] w-[50px] h-[50px] rounded-[1400px] relative md:right-[600px] right-[155px] bottom-10 md:bottom-20 dark:text-blue1 dark:bg-[#FFFF]'><ArrowBackRoundedIcon  fontSize='large'/></button></Link>
            </div>
            <div className="md:grid md:grid-rows-12 md:grid-flow-col md:gap-20">
                {
                    chapters.map((element)=>{
                        return(
                            <Link to={"/SunnaBook/"+bookSlug+"/"+ element.id} key={element.id}>
                                <Chapter id={element.id} chapterArabic={element.chapterArabic} chapterNumber={element.chapterNumber} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Chapters;