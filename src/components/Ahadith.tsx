import axios from "axios";
import { useState,useEffect } from "react";
const Ahadith = () => {
    const [ahadith , setAhadith] = useState([]);
    const getAhadith = async()=>{
        const response = await axios.get(`https://www.hadithapi.com/api/hadiths?page=1&chapter=${chapterNumber}&apiKey=$2y$10$cAfz5l2iVZlMl7iZZGGTeiV1moZ2Gse7nKDS2GOztNj253uIqHS&book=${bookSlug}`)
  
    }

    useEffect(()=>{
        getAhadith();
    },[]);
    return(
        <div>

        </div>
    )
}

export default Ahadith;