import "./styles.css"

export default function Cta (props){
    return(
        <div className="Container">
            <div className="title">
                <h1>  { props.titulo}</h1>
                <p>{props.subTitulo}</p>
            </div>
            <div className="main">
                <input type="email" id="email" name="email" placeholder="Enter your email" />
                <button>{props.button}</button>
            </div>
            <p>{props.palavrinhas}</p>
        </div>
    )
}