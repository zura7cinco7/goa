const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const submit = {
            email: e.target.email.value,
            fullName: e.target.fullname.value,
            message: e.target.message.value
        }

        console.log(submit);

        e.target.reset();
    }

    return (
        <main>
            <section id="ContactUs">
                <h1>Contact Us</h1>
                <p>Call Us: 111 22 33 45</p>
                <button>Read More</button>
            </section>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter Email" required/>
                <br />
                <br />
                <input type="text" name="fullname" placeholder="Enter FullName" required/>
                <br />
                <br />
                <textarea name="message" placeholder="Message" required/>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </main>
    )
}

export default ContactUs;