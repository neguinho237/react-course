import '../../../styles.css'

export default function Content () {
    return(
        <div className='content-container'>
            <div className='content-title'>
                <h1>Contact us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='box-message'>
                <form className='box-one' action="">
                    <label htmlFor="">Name</label>
                    <input type="" />
                </form>
                <form className='box-two' action="">
                    <label htmlFor="">Email</label>
                    <input type="" />
                </form>
                <form className='box-three' action="">
                    <label htmlFor="">Message</label>
                    <input type="Type your message..." />
                </form>
            </div>
            <div className='terms'>
                <input type="checkbox" name="" id="" />
                <p>I accept the <link rel="stylesheet" href="Terms" /></p>
            </div>
            <button>
            Submit
            </button>
        </div>
    )
}