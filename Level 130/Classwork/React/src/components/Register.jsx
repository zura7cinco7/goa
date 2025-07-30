const Register = () => {
    return (
        <>
            <h1>Registration Form</h1>
            <form>
                <label htmlFor="i1">Name</label>
                <input id="i1" type="name" name="name" placeholder="Enter your name"></input>
                <label htmlFor="i2">Last Name</label>
                <input id="i2" type="lastName" name="lastName" placeholder="Enter your last name"></input>
                <label htmlFor="i3">Password</label>
                <input id="i3" type="password" name="password" placeholder="Enter your password"></input>
                <label htmlFor="i4">Email</label>
                <input id="i4" type="email" name="email" placeholder="Enter your email"></input>
            </form>
        </>
    )
}

export default Register;