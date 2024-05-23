import "./styles.css"
import { Contacts } from "./src/pattern/composition"

export default function ContactsComposition() {
    return (
        <div className="team-container">
            <Contacts.Content/>
        </div>
    )
}