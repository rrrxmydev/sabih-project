import HijriDate from "./HijriDate";
import RamadanMiladiDate from './RamadanMiladiDate';
import SalatTimer from './SalatTimer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const Header = ()=>{
    return(
        <div>
            <div className="w-[200%] h-[500px] bg-blue4 rounded-[100%] translate-x-[-25%] translate-y-[-15%] text-[#160927]">
                <div className="  translate-y-[115%] translate-x-[67%] md:translate-x-[72%]">
                    <MenuRoundedIcon  className="md:translate-y-[-53%]" sx={{fontSize:"50px",color:"white",}}/>
                    <h1 className="text-[#FFFF] font-semibold  text-3xl translate-x-[-37%] translate-y-[-135%] font-ArefRuqaa md:text-6xl md:translate-x-[-42%] md:translate-y-[-135%]">سبح</h1>
                </div>
                <HijriDate/>
                <RamadanMiladiDate/>
                <SalatTimer/>
                
            </div>

        </div>
    )
}

export default Header;