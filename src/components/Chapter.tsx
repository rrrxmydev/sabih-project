import { chapterType } from "../types/SunnahTypes"
const Chapter = ({id,chapterArabic,chapterNumber}:chapterType)=>{
    return(
        <div  dir="rtl" className="bg-blue4 text-blue1 w-[95%] md:w-[140%] h-[100px] mb-3 rounded-md flex flex-col justify-center items-center md:grid font-semibold">
            <h3 className="text-xl">{chapterArabic}</h3>
            <span className="text-2xl">{chapterNumber}</span>
        </div>
    )
}

export default Chapter;