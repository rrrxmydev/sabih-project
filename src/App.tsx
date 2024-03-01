import Header from "./components/Header"
import Duaa from "./components/Duaa";
import Salat from "./components/Salat";
function App() {

  

  return (
    <div className="dark">
      <div className="dark overflow-hidden font-changa dark:bg-[#181D31]">
          <Header/>
          <Duaa/>
          <Duaa/>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-blue1 mb-6 dark:text-[#FFFF]">مواقيت الصلاة</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#242728] flex flex-col items-center justify-center w-[80%] rounded-md pt-8 mb-5 shadow-[#1d1f2694] shadow-md md:w-[40%] dark:bg-[#191e35]">
                <Salat/>
                <Salat/>
                <Salat/>
                <Salat/>
                <Salat/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App;
