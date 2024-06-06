import styles from "./style.module.css"

export default function Headline (){
    return(
        <div>
            <h1 className={styles.titulo}>Descoberta revoluciornaria: Nova tecnolgia
                transforma lixo plástico em combustivel limpo</h1>

            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Tempora sit aliquid voluptatem blanditiis, 
                officiis accusamus sint ratione nisi nemo maiores quasi 
                consectetur illo corporis nam expedita sed dolorem eaque ipsum.</p>
        </div>
    )
}