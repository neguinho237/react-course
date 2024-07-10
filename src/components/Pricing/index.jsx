import check from "./src/assets/image/Vector.svg"

export default function Pricing (){
    return(
        <div>
            <header className="flex flex-col justify-center items-center mt-20">
                <p className="font-semibold">Tagline</p>
                <h1 className="font-bold mt-4 text-4xl">Pricing plan</h1>
                <p className="mt-6 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </header>
            <div className="flex mt-12 justify-center ">
                <button className="bg-black text-white w-24 h-10">Monthly</button>
                <button className="h-10 w-20 border-solid border-black">Yearly</button>
            </div>
            <main className="mb-20 mt-20 w-full h-full border-solid border-black">
                <p className="text-center mt-8 font-bold text-xl">Basic plan</p>
                <h1 className="text-center mt-6 font-bold text-6xl">$19/mo</h1>
                <div className="mt-14 ml-4 ">
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>Feature text goes here</p>
                    </div>
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>Feature text goes here</p>
                    </div>
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>Feature text goes here</p>
                    </div>
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>Feature text goes here</p>
                    </div>
                    <div className="flex gap-3">
                    <img src={check} alt="" />
                    <p>Feature text goes here</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                <button className="mt-10 mb-5 text-white bg-black w-80 h-12" >Get started</button>
                </div>
            </main>



        </div>
    )
}