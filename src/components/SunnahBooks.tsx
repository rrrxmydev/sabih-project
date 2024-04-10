import Book from "./Book";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useEffect, useState,useContext } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import {bookType} from '../types/SunnahTypes';
import { DarkModeContext } from "../../contexts/DarkModeContext";

const SunnahBooks = ()=>{
    const [books,setBooks] = useState([] as bookType[]);
    const getBooks = async()=>{
        const reponse = await axios.get('https://www.hadithapi.com/api/books?apiKey=$2y$10$cAfz5l2iVZlMl7iZZGGTeiV1moZ2Gse7nKDS2GOztNj253uIqHS');
        setBooks(reponse.data.books);
        
    }
    useEffect(()=>{
        getBooks();
    },[]);

    const darkModeContext = useContext(DarkModeContext);
    return(
        <div className={darkModeContext.state ? "dark" :""}>
            <div className="flex flex-col justify-center items-center overflow-x-hidden dark:bg-gradient-to-b from-blue1 from-10% to-blue2 md:h-[100vh]">
                <h1 className="font-bold font-changa text-4xl md:text-5xl text-blue1 mb-8 translate-y-10 dark:text-[#FFFF]">كتب الحديث</h1>
                <Link to="/"><button className='bg-blue2 text-[#FFFF] w-[50px] h-[50px] rounded-[1400px] relative md:right-[600px] right-[180px] bottom-10 md:bottom-20 dark:text-blue1 dark:bg-[#FFFF]'><ArrowBackRoundedIcon  fontSize='large'/></button></Link>
                <div className="md:grid md:grid-rows-3 md:grid-flow-col md:gap-4 translate-x-16 md:translate-x-0">
                    {
                        books.map((element)=>{
                        return(
                            <Link to={`/SunnahBooks/${element.bookSlug}`} key={element.id}><Book bookName={element.bookName} hadiths_count={element.hadiths_count} writerName={element.writerName} chapters_count={element.chapters_count} /></Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SunnahBooks;