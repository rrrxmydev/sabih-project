const Duaa = ()=>{
    return(
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
            ">
                <div className="bg-[#FCFFF4] w-[100px] md:w-[120px]  flex items-center justify-center relative bottom-4">
                    <h1 className=" font-semibold text-xl text-blue1 md:text-2xl ">دعاء اليوم</h1>
                </div>
                <div className=" w-full felx justify-center p-3 relative bottom-4 left-2 md:p-4" >
                    <p className=" text-blue2 text-xl font-semibold md:text-2xl">بسم اللهِ وضعتُ جنبي، اللهم اغفر لي ذنبي، وأخْسئْ شيطاني، وفكَّ رِهاني، واجعلني في النديِّ الأعلى</p>
                </div>
            </div>
    );
}

export default Duaa;