import "./styles.css"
import { useState } from "react"


export default function Cta (props){

    function cadastrarUsuario (e){
        console.log("Usuario cadastrado com sucesso")
    console.log(email)
    e.preventDefault()
}

const[email, setEmail] = useState ()

    
    return(
        <div className="Container"> 
            <div className="title">
                <h1>  { props.titulo}</h1>
                <p>{props.subTitulo}</p>
            </div>
            <form onSubmit={cadastrarUsuario}>
            <div className="main">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)} />
                  
                <button>{props.button}</button>
            </div>
            <p>{props.palavrinhas}</p>
            </form>
        </div>
    )
}