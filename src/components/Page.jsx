export const Page = () => {
    return(
        <div className="container mx-auto flex justify-center">
            <div className="flex flex-col items-center justify-center rounded-lg  bg-slate-800 text-white">
                <div className=" px-10 pb-8 flex flex-col  md:flex md:flex-row md:pl-0 md:pb-0 ">
                    <img className="w-28 h-28 rounded-full mx-auto m-5 object-cover md: md:rounded-none md:h-auto md:object-fit md:m-0 md:rounded-l-md md:w-40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BenFranklinDuplessis.jpg/1200px-BenFranklinDuplessis.jpg" alt="" />
                    <div className="md:pl-6 md:pt-10 md:pb-10 md:flex md:flex-col" > 
                        <p className="break-words text-xl">{` "Me fale e eu esqueço. Me ensine e eu lembro. Me envolva e eu aprendo de verdade." `}</p>
                        <div className="pt-6 md:">
                            <p className="text-blue-400 font-bold  text-center md:text-left">Benjamin Franklin</p>
                            <p className="font-extralight text-center md:text-left">Político, EUA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}