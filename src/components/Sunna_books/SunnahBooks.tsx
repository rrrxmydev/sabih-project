//react
import { useEffect, useState, useContext } from "react";
//components
import Book from "./Book";
import NavBar from "../NavBar";
import Skeleton from "../Skeleton";
//react router dom
import { Link } from "react-router-dom";
//axios
import axios from "axios";
//types
import { bookType } from "../../types/SunnahTypes";
//contexts
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import { openNavBarContext } from "../../../contexts/openNavBarContext";
//MUI ICONS
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
//CSS
import "../../styles/Sunna_books/SunnahBooks.css";

const SunnahBooks = () => {
  //states
  const [books, setBooks] = useState([] as bookType[]);
  const [loading, setLoading] = useState(false);
  //récupération de contexts
  const openNav = useContext(openNavBarContext);
  const darkModeContext = useContext(DarkModeContext);
  //appeler l'API pour obtenir les livres
  const getBooks = async () => {
    setLoading(true);
    const reponse = await axios.get(
      "https://www.hadithapi.com/api/books?apiKey=$2y$10$cAfz5l2iVZlMl7iZZGGTeiV1moZ2Gse7nKDS2GOztNj253uIqHS"
    );
    setBooks(reponse.data.books);
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
    openNav.state ? openNav.setState(false) : "";
  }, []);
  //skeletonEffect style prop
  const skeletonStyle =
    "md:w-[400px] md:h-[150px] w-[300px] h-[100px] md:mb-0 mb-2 translate-x-[-50px] md:translate-x-0";
  const skeletonEffect = () => {
    return (
      <>
        <Skeleton />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
      </>
    );
  };

  return (
    <div className={darkModeContext.state ? "dark" : ""}>
      <div className="contain">
        <h1 className="BookTitle">كتب الحديث</h1>
        <Link to="/">
          <button className="arrowBackButton">
            <ArrowBackRoundedIcon fontSize="large" />
          </button>
        </Link>
        <div className="booksContainer">
          {/* Mapping books */}
          {loading
            ? skeletonEffect()
            : books.map((element) => {
                return (
                  <Link to={`/SunnaBooks/${element.bookSlug}`} key={element.id}>
                    <Book
                      bookName={element.bookName}
                      hadiths_count={element.hadiths_count}
                      writerName={element.writerName}
                      chapters_count={element.chapters_count}
                    />
                  </Link>
                );
              })}
        </div>
      </div>
      <div
        className={
          openNav.state
            ? `fixed translate-y-[-800px] md:translate-y-[100px] w-full`
            : ""
        }
      >
        {openNav.state ? <NavBar /> : ""}
      </div>
    </div>
  );
};

export default SunnahBooks;
