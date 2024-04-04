import Header from "./components/Header"
import Duaa from "./components/Duaa";
import Salawat from "./components/Salawat";
import { useState } from "react";
function App() {
  //  Dark Mode state : 
  const [darkMode,setDarkMode] = useState(false);

  return (
    <div className={darkMode?"dark":""}>
      <div className="overflow-hidden font-changa dark:bg-gradient-to-b from-blue1 from-50% to-blue2 md:h-[100%]">
          <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Duaa/>
          <Duaa/>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-blue1 mb-6 dark:text-[#FFFF]">مواقيت الصلاة</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#242728] flex flex-col items-center justify-center w-[80%] rounded-md pt-8 mb-5 shadow-[#1d1f2694] shadow-md md:w-[40%] dark:bg-[#191e35] dark:bg-opacity-45 backdrop-blur-3xl dark:shadow-none">
                <Salawat/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App;
