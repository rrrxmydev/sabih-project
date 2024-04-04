type Salatprop = {
    name:string,
    time:string,
}

const Salat = ({name,time}:Salatprop)=>{
    return(
        <div className="bg-[#FFFF] w-[40%] rounded-md p-[10px] mb-[20px] flex flex-col justify-center items-center md:w-[35%]  hover:transition-all hover:ease-in-out   hover:scale-105 duration-500 cursor-pointer">
            <h2 className="font-semibold text-xl text-blue1 md:text-2xl">{name}</h2>
            <span dir="rtl"className="text-l font-semibold text-blue1 md:text-xl">{time.substring(0,5)}</span>
        </div>
    )
}

export default Salat;