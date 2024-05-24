import "./styles.css"
import { Team } from "./src/pattern/composition"


const TeamUsers = [
    {
    image: "https://i.pinimg.com/originals/37/fb/89/37fb896208d39fed48e4946a87f6444a.jpg",
    name : "Assassin's Creed Odyssey",
    role: "Jogo",
    description: "Escreva sua própria odisséia épica",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://th.bing.com/th/id/OIP.wGkrxMVujL0iesyQBxkLigHaEo?rs=1&pid=ImgDetMain",
    name : "Assassin's Creed IV: Black Flag",
    role: "Jogo",
    description: "Maior e mais imersivo jogo de Assasinos da franquia",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://i.pinimg.com/originals/37/fb/89/37fb896208d39fed48e4946a87f6444a.jpg",
    name : "Assassin's Creed Odyssey",
    role: "Jogo",
    description: "Escreva sua própria odisséia épica",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://i.pinimg.com/originals/37/fb/89/37fb896208d39fed48e4946a87f6444a.jpg",
    name : "Assassin's Creed Odyssey",
    role: "Jogo",
    description: "Escreva sua própria odisséia épica",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://i.pinimg.com/originals/37/fb/89/37fb896208d39fed48e4946a87f6444a.jpg",
    name : "Assassin's Creed Odyssey",
    role: "Jogo",
    description: "Escreva sua própria odisséia épica",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://i.pinimg.com/originals/37/fb/89/37fb896208d39fed48e4946a87f6444a.jpg",
    name : "Assassin's Creed Odyssey",
    role: "Jogo",
    description: "Escreva sua própria odisséia épica",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://i.pinimg.com/originals/37/fb/89/37fb896208d39fed48e4946a87f6444a.jpg",
    name : "Assassin's Creed Odyssey",
    role: "Jogo",
    description: "Escreva sua própria odisséia épica",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 }
]

export default function TeamComposition() {
    return (
        <div className="team-container">
            <Team.Section />
            <div className="team-content-wrapper">

                {
                    TeamUsers.map((user, key) =>{
                        return(
                        <TeamComposition
                        key={key}
                        image={user.image}
                        name={user.name}
                        role={user.role}
                        description={user.description}
                        linkedin={user.mediaSocial.linkedin}
                        x={user.mediaSocial.x}
                        dribble={user.mediaSocial.dribble}
                        
                        />

                    )
                    })
                }

            </div>
            <Team.Main/>
        </div>

    )
}