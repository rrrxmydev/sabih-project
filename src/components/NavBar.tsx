import '../styles/nav.css';
import { Link } from 'react-router-dom';
const NavBar = ()=>{
    return(
        <div dir="rtl" className="bg-gradient-to-b from-[#0B60B0] from-1000% to-[#40A2D8] w-full h-[500px] fixed bottom-1
            rounded-tl-3xl rounded-tr-3xl flex flex-col justify-center items-start px-10
            pb-12 -mb-2
            dark:bg-gradient-to-b dark:from-blue2 dark:from-5% dark:to-blue1 
            text-4xl font-semibold text-[#FFFF] font-changa
        ">
            <Link to="/"><h3 className="nav">الرئيسية</h3> </Link> <br/>
            <Link to="/athkar"><h3 className="nav">أذكار</h3> </Link> <br/>
            <Link to="/SunnaBooks"><h3 className="nav">كتب السنة </h3> </Link> <br/>
            <Link to="aboutus"><h3 className="nav">عن الموقع</h3> </Link> <br/>
        </div>
    );
}

export default NavBar;