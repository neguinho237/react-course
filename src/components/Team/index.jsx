import "./styles.css"
import { Team } from "./src/pattern/composition"


const TeamUsers = [
    {
    image: "https://vignette.wikia.nocookie.net/assassinscreed/images/f/f5/Assassin's_Creed_Odyssey.jpg/revision/latest?cb=20180611213716",
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
    image: "https://th.bing.com/th/id/R.e5b5f648648d474690530dc4be681d89?rik=ROHYfxj9Jd7Y0Q&riu=http%3a%2f%2fwww.hdwallpapers.in%2fwalls%2fassassins_creed_4_black_flag_game-wide.jpg&ehk=5u0SP9gm4IKEI8TMgNePVcn1mKzzorfQ45AZPmhgE%2f0%3d&risl=&pid=ImgRaw&r=0",
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
    image: "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2022/09/FcUcyLqX0AIKawY.jpeg",
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
    image: "https://www.911hotfm.com.au/wp-content/uploads/sites/21/2024/05/20240516-assassinscreed-shadows-feature.jpg?w=1200",
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
    image: "https://th.bing.com/th/id/OIP.BDNwsJysF6WOqpAUk1-aUwAAAA?rs=1&pid=ImgDetMain",
    name : "Assassin's Creed Origins",
    role: "Jogo",
    description: "Ande e descubra novas aventuras no Egito antigo",
    mediaSocial: {
        linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/" 
    }
 },
]

export default function TeamComposition() {
    return (
        <div className="team-container">
        <Team.Section />
        <div className="team-content-wrapper">

            {
            TeamUsers.map((user, key) => {
                return (
                    <Team.Content 
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
        <Team.Main />
        </div>
    )
}