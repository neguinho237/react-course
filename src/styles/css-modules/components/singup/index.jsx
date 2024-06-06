import styles from "./style.module.css"
import Google from "../../../../assets/images/svg/Google.svg"

export default function SingUp (){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Logo</h1>
            </div>

            <div className={styles.main}>
                
                <div className={styles.text}>
                <h1>Sing Up</h1>
                <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
                </div>
                
                <div className={styles.inputs}>
                        <div className={styles.inputOne}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" Name = "name" />
                        </div>
                        <div>{styles.inputwo}
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" Email = "email" />
                        </div>
                        <div className={styles.inputThree}>
                        <label for="pwd">Password:</label>
                        <input type="password" id="pwd" name="pwd"></input>
                        </div>
                </div>
                <div className={styles.buttons}>
                    <button>Sign Up</button>
                    <button> <img src= {Google} alt="google incon" /> Sign Up with Google</button>
                </div>
                <div className={styles.logIn}>
                    <p>Already have an account? <a href="LogIn">Log In</a> </p>
                </div>
            </div>

            <div className={styles.footer}>
                <p>© 2022 Relume</p>
            </div>

        </div>
    )
}