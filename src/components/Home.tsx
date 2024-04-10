import Header from "../components/Header"
import Duaa from "../components/Duaa";
import Salawat from "../components/Salawat";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import NavBar from "../components/NavBar";
import '../App.css';
const Home = ()=>{
  const [openNav , setOpenNav] = useState(false);
  const darkMode = useContext(DarkModeContext);

    return(
        <div className={darkMode.state ?"dark":""}>
        <div className="overflow-hidden font-changa dark:bg-gradient-to-b from-blue1 from-50% to-blue2 md:h-[100%]">
            <Header openNav = {openNav} setOpenNav = {setOpenNav}/>
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
        <div className={openNav? "fixed translate-y-[-500px] w-full md:translate-y-[-800px]" : "fixed translate-y-[500px] w-full"}>
          {openNav?<NavBar/> : <></>}
        </div>

      </div>
    )
}

export default Home;