import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Hadith from "./Hadith"; // Composant pour afficher un Hadith
import Loader from "../../Loader"; // Composant pour afficher un indicateur de chargement
import { DarkModeContext } from "../../../contexts/DarkModeContext"; // Contexte pour mode nuite
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"; // Icone flèche
import InfiniteScroll from "react-infinite-scroll-component"; // Composant de scroll infini
import "../../styles/Sunna_books/Ahadith.css"; // Styles CSS

// Définition du type de données pour un Hadith
type HadithType = {
  hadithNumber: string;
  hadithArabic: string;
  book: {
    bookName: string;
  };
  chapter: {
    chapterArabic: string;
  };
};

// Définition du composant Ahadith
const Ahadith = () => {
  // Définition des états
  const [ahadith, setAhadith] = useState([] as HadithType[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [lastPage, setLastPage] = useState(0);

  // Récupération des paramètres de route avec useParams
  let { chapterNumber } = useParams();
  let { bookSlug } = useParams();

  // Récupération de l'état du mode sombre depuis le contexte
  const darkMode = useContext(DarkModeContext);

  // Fonction pour récupérer les Hadiths depuis l'API
  const getHadith = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://www.hadithapi.com/api/hadiths?page=${currentPage}&chapter=${chapterNumber}&apiKey=$2y$10$cAfz5l2iVZlMl7iZZGGTeiV1moZ2Gse7nKDS2GOztNj253uIqHS&book=${bookSlug}`
      );
      // Mise à jour de l'état en fonction de la réponse de l'API
      if (lastPage === 0) {
        setAhadith(response.data.hadiths.data);
      } else {
        setAhadith((prev) => [...prev, ...response.data.hadiths.data]);
      }
      setCurrentPage((prev) => prev + 1);
      setLastPage(response.data.hadiths.last_page);
      setHasMoreData(
        response.data.hadiths.current_page < response.data.hadiths.last_page
      );
    } catch (error) {
      console.error("Échec de la récupération des données :", error);
    }
    setIsLoading(false);
  };

  // Récupération des données à la montée du composant
  useEffect(() => {
    getHadith();
  }, []);

  // Fonction pour gérer l'événement de scroll
  const handleScroll = () => {
    if (!isLoading && hasMoreData) {
      getHadith();
    }
  };

  let chapterName: string = "";
  let bookName: string = "";

  // Mise à jour des noms de chapitre et de livre en fonction des données récupérées
  if (ahadith.length !== 0) {
    chapterName = ahadith[1].chapter.chapterArabic;
    switch (ahadith[0].book.bookName) {
      case "Sahih Muslim":
        bookName = "صحيح مسلم";
        break;
      case "Sunan Abu Dawood":
        bookName = "سنن أبو داوود";
        break;
      case "Mishkat Al-Masabih":
        bookName = "مشكاة المصابيح";
        break;
      case "Sunan Ibn-e-Majah":
        bookName = "سنن إبن ماجه";
        break;
      case "Musnad Ahmad":
        bookName = "مسند اللإمام أحمد";
        break;
      case "Jami' Al-Tirmidhi":
        bookName = "جامع الترمذي";
        break;
      case "Al-Silsila Sahiha":
        bookName = "السلسلة الصحيحة";
        break;
      case "Sunan An-Nasa`i":
        bookName = "سنن النسائي";
        break;
      default:
        bookName = "صحيح البخاري";
        break;
    }
  }

  // Rendu du composant
  return (
    <div className={darkMode.state ? "dark" : ""}>
      <div className="AhadithContainer">
        {/* Lien pour revenir en arrière */}
        <Link to={`/SunnaBooks/${bookSlug}`}>
          <button className="arrowBack">
            <ArrowBackRoundedIcon fontSize="large" />
          </button>
        </Link>
        {/* Affichage des noms de livre et de chapitre */}
        <div className="w-[90%] flex justify-center items-center flex-col">
          <h1 className="text-3xl font-semibold text-blue1 my-6 dark:text-[#FFFF]">
            {bookName} - {chapterName}
          </h1>
        </div>
        {/* Conteneur de scroll infini */}
        <InfiniteScroll
          dataLength={ahadith.length}
          next={handleScroll}
          hasMore={hasMoreData}
          loader={
            <div className="w-[70px] ml-[600px]">
              <Loader color={darkMode.state ? "#FFFF" : "#08FFC5"} />
            </div>
          }
        >
          {/* Rendu des composants Hadith */}
          {ahadith.map((element, index) => {
            return (
              <Hadith
                key={index}
                hadithNumber={element.hadithNumber}
                script={element.hadithArabic}
                isSaved={false}
              />
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Ahadith;
