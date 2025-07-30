const UserCard = () => {
    const src = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80'
    return (
        <>
            <img src={src}/>
            <h1>About Me</h1>
            <p>Hi My Name Is Nino Gvinjilia And I Am Learning React</p>
            <button>Click To see More</button>
        </>
    )
}

export default UserCard;