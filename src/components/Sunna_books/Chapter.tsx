//types
import { chapterType } from "../../types/SunnahTypes";
//css
import "../../styles/Sunna_books/Chapter.css";
const Chapter = ({ chapterArabic, chapterNumber }: chapterType) => {
  return (
    <div dir="rtl" className="chpaterContainer">
      <h3 className="chapterName">{chapterArabic}</h3>
      <span className="chapterNumber">{chapterNumber}</span>
    </div>
  );
};

export default Chapter;
