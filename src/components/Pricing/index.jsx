import check from "./src/assets/image/Vector.svg"

export default function Pricing (props){
    return(
        <div > 
            <header className="flex flex-col justify-center items-center mt-20">
                <p className="font-semibold">{props.title}</p>
                <h1 className="font-bold mt-4 text-4xl">{props.subTitle}</h1>
                <p className="mt-6 font-medium">{props.text}</p>
            </header>
            <div className="flex mt-12 justify-center ">
                <button className= "bg-green-700 text-white w-24 h-10 border-solid border-black">{props.button}</button>
                <button className="h-10 w-20 border-solid border-black">{props.buttonTwo}</button>
            </div>
            <main className="mb-20 mt-20 w-full h-full border-solid border-black">
                <p className="text-center mt-8 font-bold text-xl">{props.basicPlan}</p>
                <h1 className="text-center mt-6 font-bold text-6xl">{props.price}</h1>
                <div className="mt-14 ml-4 flex flex-col gap-6">
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>{props.textA}</p>
                    </div>
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>{props.textB}</p>
                    </div>
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>{props.textC}</p>
                    </div>
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>{props.textD}</p>
                    </div>
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>{props.textD}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                <button className="border-solid border-black mt-10 mb-5 text-white bg-green-700 w-80 h-12" >{props.buttonThree}</button>
                </div>
            </main>



        </div>
    )
}