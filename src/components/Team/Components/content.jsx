import '../styles.css'
import imagem from "../../../assets/images/svg/Image.svg"
import Linked from "../../../assets/images/svg/linkedin.svg"
import X from "../../../assets/images/svg/X.svg"
import Dribble from "../../../assets/images/svg/Dribble.svg"
export default function Content(){
    return(
        <div className='content-container'>
           <img className='content-image' src={imagem} alt="" />
            <div className='content-title'>
                 <h1>Full name</h1>
                 <h2>Job title</h2>
            </div>
            <p className='content-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique.</p>
            <div className="content-icons">
                <a href="https://br.linkedin.com/" target='_blank'>
                <img src={Linked} alt="" />
                </a>
                
                <a href="https://x.com/x." target='_blank'>
                <img src={X} alt="" />
                </a>

                <a href="https://dribbble.com/" target='_blank'>
                <img src={Dribble} alt="" />
                </a>
            </div>
        </div>
    )
}