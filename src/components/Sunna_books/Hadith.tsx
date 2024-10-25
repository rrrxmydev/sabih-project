// Import des icônes de MUI
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
// Import des hooks useState et useContext de React
import { useState, useContext } from "react";
// Import du contexte DarkModeContext
import { DarkModeContext } from "../../../contexts/DarkModeContext";
// Import du type HadithType
import { HadithType } from "../../types/HadithTypes";
//Style
import "../../styles/Sunna_books/Hadith.css";

// Définition du composant Hadith
const Hadith = ({ script, hadithNumber, isSaved }: HadithType) => {
  // Définition de l'état pour la sauvegarde du Hadith
  const [saved, setSaved] = useState(isSaved);
  // Récupération de l'état du mode sombre depuis le contexte
  const darkMode = useContext(DarkModeContext);

  // Fonction appelée lorsqu'on clique sur le bouton de sauvegarde
  const BookMarkClick = () => {
    if (saved) {
      // Si le Hadith est déjà sauvegardé, le supprimer des local storage
      let data: HadithType[] | null = JSON.parse(
        localStorage.getItem("savedHadiths") || "null"
      );
      data = data ? data : [];
      data = data.filter((element) => {
        if (
          element.hadithNumber !== hadithNumber &&
          element.script !== script
        ) {
          return element;
        }
      });
      localStorage.setItem("savedHadiths", JSON.stringify(data));
      setSaved(false);
    } else {
      // Si le Hadith n'est pas encore sauvegardé, l'ajouter aux local storage
      setSaved(true);
      let data: HadithType[] | null = JSON.parse(
        localStorage.getItem("savedHadiths") || "null"
      );
      data = data ? data : [];

      let newHadith: HadithType = {
        script: script,
        hadithNumber: hadithNumber,
        isSaved: true,
      };

      data.push(newHadith);

      localStorage.setItem("savedHadiths", JSON.stringify(data));
    }
  };

  // Rendu du composant
  return (
    <div className={darkMode.state ? "dark" : ""}>
      <div className="pageContainer">
        {/* Bouton de sauvegarde */}
        <div className="BookMarkContainer" onClick={() => BookMarkClick()}>
          {saved ? (
            <BookmarkRoundedIcon
              sx={{ fontSize: "30px" }}
              className="text-[#ff0040] cursor-pointer "
            />
          ) : (
            <BookmarkBorderRoundedIcon
              sx={{ fontSize: "30px" }}
              className="text-blue1 dark:text-[#FFFF] cursor-pointer"
            />
          )}
        </div>
        {/* Conteneur du Hadith */}
        <div className="hadithContainerr">
          {/* Numéro de Hadith */}
          <div className="hadithNumberContainer">
            <h1 className="hadithNumber">الحديث رقم {hadithNumber}</h1>
          </div>
          {/* Texte du Hadith */}
          <div className="scriptContainerr">
            <p className="scirpt">{script}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hadith;
