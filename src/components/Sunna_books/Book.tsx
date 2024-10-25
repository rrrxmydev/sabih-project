// Définition du type des propriétés du livre
type bookProps = {
  bookName: string;
  hadiths_count: string;
  chapters_count: string;
  writerName: string;
};

// Définition du composant Book
const Book = (props: bookProps) => {
  // Initialisation des variables pour l'auteur et le nom du livre
  let author: string;
  let bookName: string;

  // Switch case pour convertir le nom de l'auteur en arabe
  switch (props.writerName) {
    case "Imam Muslim":
      author = "الإمام مسلم";
      break;
    case "Abu `Isa Muhammad at-Tirmidhi":
      author = "أبو عيسى محمد الترمذي";
      break;
    case "Imam Abu Dawud Sulayman ibn al-Ash'ath as-Sijistani":
      author = "أبو داود سليمان بن الأشعث السجستاني";
      break;
    case "Imam Muhammad bin Yazid Ibn Majah al-Qazvini":
      author = "محمد بن يزيد بن ماجه القزويني";
      break;
    case "Imam Ahmad an-Nasa`i":
      author = "أحمد بن شعيب النسائي";
      break;
    case "Imam Khatib at-Tabrizi":
      author = "الإمام محمد الخطيب التبريزي";
      break;
    case "Imam Ahmad ibn Hanbal":
      author = "الإمام أحمد ابن حنبل";
      break;
    case "Allama Muhammad Nasir Uddin Al-Bani":
      author = "الإمام محمد ناصر الدين الألباني";
      break;
    default:
      author = "الإمام البخاري";
      break;
  }
  // Switch case pour convertir le nom du livre en arabe
  switch (props.bookName) {
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

  // Rendu du composant
  return (
    <div
      dir="rtl"
      className="flex flex-col justify-center items-center bg-blue4 text-blue1 text-xl font-bold font-changa w-[70%] md:w-[100%]  cursor-pointer px-3 py-1 rounded-md mb-6
            md:hover:scale-105
            md:m-1
            md:hover:shadow-xl
        "
    >
      {/* Affichage du nom du livre */}
      <h3>{bookName}</h3>
      {/* Ligne de séparation */}
      <hr className=" w-[95%] my-1" />
      {/* Affichage de l'auteur */}
      <span>المؤلف :{author}</span>
      {/* Affichage du nombre de Hadiths */}
      <span>عدد الأحاديث : {props.hadiths_count}</span>
      {/* Affichage du nombre de chapitres */}
      <span>عدد الكتب : {props.chapters_count}</span>
    </div>
  );
};

export default Book; // Export du composant Book
