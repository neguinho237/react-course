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
    image: "https://store-images.s-microsoft.com/image/apps.8098.14585440003614248.9f7109bf-73f7-4bc7-ba61-1eeb006d905a.222e4dfa-df01-4864-a10a-bc3666f1a3cf?mode=scale&q=90&h=1080&w=1920",
    name : "Assassin's Creed Valhalla",
    role: "Jogo",
    description: "Crie sua própria lenda viking",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://m.media-amazon.com/images/M/MV5BYmEyYjRlYWYtYmMyNS00YTAzLWI2MTAtMDllNjU1NmVkOWVmXkEyXkFqcGdeQXVyMTUzMTUxMzk1._V1_FMjpg_UX1000_.jpg",
    name : "Assassin's Creed Mirage",
    role: "Jogo",
    description: "Torne-se o assassino mais versatil da história da franquia",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://th.bing.com/th?id=OIF.fLr98qx7JJ%2fw%2fr6c9fVtcQ&rs=1&pid=ImgDetMain",
    name : "Assassin's Creed Shadows",
    role: "Jogo",
    description: "Um novo credo surge",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
    {
    image: "https://image.api.playstation.com/cdn/UP0001/CUSA05855_00/yYiGRi9oya2bnKV9QnZ65ghdgBTVWQfI.png",
    name : "Assassin's Creed Origins",
    role: "Jogo",
    description: "Ande e descubra novas aventuras no Egito antigo",
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