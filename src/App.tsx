import Header from "./components/Header"
import Duaa from "./components/Duaa";
import Salat from "./components/Salat";
function App() {

  return (
    <div className="overflow-hidden font-changa">
        <Header/>
        <Duaa/>
        <Duaa/>
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-semibold text-blue1 mb-6">مواقيت الصلاة</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#242728] flex flex-col items-center justify-center w-[80%] rounded-md pt-8 mb-5 shadow-[#000] shadow-md md:w-[40%]">
              <Salat/>
              <Salat/>
              <Salat/>
              <Salat/>
              <Salat/>
          </div>
        </div>
    </div>
  )
}

export default App;
