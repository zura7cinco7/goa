const AboutOurWebPage = () => {
    return (
        <section id="AboutUs">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
            Voluptatem rem ipsam perferendis repellendus, atque eum minima<br />
            sapiente facere eos sint distinctio nobis eaque tempore. Nesciunt<br />
            aliquid exercitationem soluta obcaecati voluptatibus?</p>
            <button className="btn1">Read More</button>

            <h1>Enter Your Information</h1>
            <form>
                <input type="email" name="email" placeholder="Enter Email" required/>
                <br />
                <br />
                <input type="text" name="name" placeholder="Enter Name" required />
                <br />
                <br />
                <textarea name="message" placeholder="Message" />
                <br />
                <br />
                <button className="btn2">Submit</button>
            </form>
        </section>
    )
}

export default AboutOurWebPage;