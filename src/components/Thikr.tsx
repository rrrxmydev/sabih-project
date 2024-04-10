import { useState } from "react";
import { thikrType } from "../types/ThikrTypes";

type stateTypes = {
    reset:boolean,
    setReset:React.Dispatch<React.SetStateAction<boolean>>,
}
const Athkar = (props:thikrType & stateTypes)=>{
    const [repete , setRepete] = useState(props.repete);
    const [longPress , setLongPress] = useState(false);

    const handleClick = ()=>{
        if(repete > 0){
            setRepete(repete-1);
        }
    }

    const handleDoubleClick = ()=>{
        setRepete(props.repete);
    }
    let timer:ReturnType<typeof setTimeout>;
    const handleTouchStart = ()=>{
        timer = setTimeout(()=>{
            setLongPress(true);
        },500);
    }

    const handleTouchEnd = ()=>{
        clearTimeout(timer);
        if(!longPress){
            handleClick();
        }
        setLongPress(false);
    }


    if(props.reset == true){
        setRepete(props.repete);
        props.setReset(false);
    }

    const fadl = (info:null|string)=>{
        if(info != null){
            return(
                <div dir="rtl" className="flex flex-col justify-start  rounded-lg  font-changa w-[50%] translate-x-1 translate-y-2 h-32 bg-blue4 text-blue1 font-bold p-2
                dark:bg-blue2 dark:text-[#FFFF]
                md:w-[30%]
                ">
                    <span>الفضل : </span>
                    <span>{props.info}</span>
                </div>
            );
        }
    }


    return(
        <div>
            <div className="
                border-blue1
                border-2
                rounded-md
                w-[80%]
                translate-x-[13%]
                flex
                flex-col
                justify-center
                items-center
                mb-[40px]
                md:w-[50%]
                md:translate-x-[53%]
                dark:border-[#FFFF] z-0
                mt-10
            ">
                <div dir="rtl" className=" w-full flex justify-center flex-col items-center p-5 relative bottom-1 left-2 md:p-4" >
                    <p className=" text-blue2 text-xl font-semibold md:text-2xl dark:dark:text-[#FFFF]">{props.script}</p>
                </div>

            </div>
            <div className="flex flex-row justify-center items-center translate-y-[-30%]">

                <div dir="rtl" className="flex flex-col justify-center items-center translate-y-[93%] rounded-lg  font-changa w-[28%] h-32 bg-blue4 text-blue1 font-bold cursor-pointer p-2  relative bottom-[111px]
                dark:bg-blue2 dark:text-[#FFFF]
                md:w-[10%]
                "
                    // onClick={handleClick}
                    // onDoubleClick={handleDoubleClick}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <span className="text-l"> عدد التكرار</span>
                    <span className="text-4xl">{repete}</span>
                </div>
                {fadl(props.info)}

            </div>
    </div>
    )
}

export default Athkar;