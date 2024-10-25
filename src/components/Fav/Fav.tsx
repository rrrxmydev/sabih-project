// Import des types et des composants nécessaires
import { HadithType } from "../../types/HadithTypes"; // Type de données pour un Hadith
import Hadith from "../Sunna_books/Hadith"; // Composant pour afficher un Hadith
import { DarkModeContext } from "../../../contexts/DarkModeContext"; // Contexte pour le mode sombre
import { useContext } from "react"; // Import du hook useContext de React

// Définition du composant Fav
const Fav = () => {
  // Récupération des Hadiths sauvegardés depuis le stockage local
  const hadiths: HadithType[] | null = JSON.parse(
    localStorage.getItem("savedHadiths") || "null"
  );

  // Récupération de l'état du mode sombre depuis le contexte
  const darkMode = useContext(DarkModeContext);

  // Fonction pour obtenir les données des Hadiths sauvegardés et les afficher
  const getData = () => {
    if (hadiths != null && hadiths.length != 0) {
      // Si des Hadiths sont sauvegardés, les afficher en utilisant le composant Hadith
      return hadiths.map((element, index) => (
        <Hadith
          key={index}
          hadithNumber={element.hadithNumber}
          script={element.script}
          isSaved={true}
        />
      ));
    } else {
      // Si aucun Hadith n'est sauvegardé, afficher un message indiquant qu'il n'y a pas de Hadiths sauvegardés
      return (
        <h1 className="font-changa font-semibold text-xl text-blue1 dark:text-white translate-y-[40px]">
          ! لا توجد أحاديث في المفضلة
        </h1>
      );
    }
  };

  // Rendu du composant
  return (
    <div className={darkMode.state ? "dark" : ""}>
      <div className="flex flex-col items-center justify-center dark:bg-blue1">
        {/* Titre de la section */}
        <h1 className="font-bold font-changa text-4xl text-blue1 mt-3 dark:text-white">
          المفضلة
        </h1>
        {/* Appel de la fonction pour afficher les Hadiths sauvegardés */}
        {getData()}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Fav; // Export du composant Fav
