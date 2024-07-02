import Facebook from "./src/assets/images/Facebook.svg"
import Instagram from "./src/assets/images/Instagram.svg"
import X from "./src/assets/images/X.svg"
import Linkedin from "./src/assets/images/Linkedin.svg"
import Youtube from "./src/assets/images/Youtube.svg"

export default function Footer (){
    return(
        <main className="flex flex-col justify-center items-center ">
            <section className="flex gap-40" >
                <h1>Logo</h1>
                <div className="flex gap-4">
                <a href="link one">Link one</a>
                <a href="link two">Link two</a>
                <a href="link three">Link three</a>
                <a href="link four">Link four</a>
                <a href="link five">Link five</a>
                </div>
                <div className="flex gap-5">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={X} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Youtube} alt="" />
                </div>
            </section>
        </main>
    )
}