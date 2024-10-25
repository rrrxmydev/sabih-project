//react router dom
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//axios
import axios from "axios";
//react
import { useContext, useEffect, useState } from "react";
//MUI ICONS
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
//types
import { chapterType } from "../../types/SunnahTypes";
//components
import Chapter from "./Chapter";
import Skeleton from "../Skeleton";
//contexts
import { DarkModeContext } from "../../../contexts/DarkModeContext";
//CSS
import "../../styles/Sunna_books/chapters.css";

const Chapters = () => {
  //obtenir le paramètre de requête à partir du lien en utilisant useParams
  const { bookSlug } = useParams();
  //states
  const [chapters, setChapter] = useState([] as chapterType[]);
  const [loading, setLoading] = useState(false);
  //contexts
  const darkMode = useContext(DarkModeContext);
  //appeler l'API pour obtenir les chapitres
  const getChapters = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://www.hadithapi.com/api/${bookSlug}/chapters?apiKey=$2y$10$cAfz5l2iVZlMl7iZZGGTeiV1moZ2Gse7nKDS2GOztNj253uIqHS`
    );
    setChapter(response.data.chapters);
    setLoading(false);
  };

  useEffect(() => {
    getChapters();
  }, []);
  const skeletonStyle = "w-[270px] h-[100px] m-4 mb-3";

  const skeletonEffect = () => {
    return (
      <>
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
        <Skeleton style={skeletonStyle} />
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
    <div className={darkMode.state ? "dark" : ""}>
      <div className="chaptersContainer">
        <div className="translate-y-5">
          <h1 className="title">الكتب</h1>
          <Link to="/SunnaBooks">
            <button className="goBackButton">
              <ArrowBackRoundedIcon fontSize="large" />
            </button>
          </Link>
        </div>
        <div className="md:grid md:grid-rows-12 md:grid-cols-4 md:gap-2">
          {loading
            ? skeletonEffect()
            : chapters.map((element) => {
                return (
                  <Link
                    to={`/SunnaBooks/${bookSlug}/${element.chapterNumber}`}
                    key={element.id}
                  >
                    <Chapter
                      id={element.id}
                      chapterArabic={element.chapterArabic}
                      chapterNumber={element.chapterNumber}
                    />
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Chapters;
