const SearchPresentational = ({ handleSubmit, movie }) => {
    return (
      <main>
        <form onSubmit={ handleSubmit }>
          <img className="logo" src="./assets/Logo (3).png" />
            <div className="inputDiv">
                <div className="searchImgDiv">
                    <img className="searchImg" src="./assets/icon-search.svg" />
                </div>
                <input placeholder="Search Movie" name="movie" />
            </div>
            <a href="#">Watchlist</a>
            <a href="#">Sign In</a>
        </form>
        {movie === null ? (
                <div className="noMoviesFound">
                    <section id="mainImgCollage">
                        <img src="./assets/collage.png" className="collage"/>
                        <div className="movieMosaic">
                            <h2>Free Movies to Watch,<br /> Anytime Anywhere.</h2>
                            <p>The search is over! Let MovieMosaic help you find the perfect<br /> movie to watch tonight for free.</p>
                            <button>Watch Free</button>
                        </div>
                    </section>
                    <p className="noMoviesFoundP">No Movies Found</p>
                </div>
        ) : movie ? (
            <section>
                <section id="mainImgCollage">
                    <img src="./assets/collage.png" className="collage"/>
                    <div className="movieMosaic">
                        <h2>Free Movies to Watch,<br /> Anytime Anywhere.</h2>
                        <p>The search is over! Let MovieMosaic help you find the perfect<br /> movie to watch tonight for free.</p>
                        <button>Watch Free</button>
                    </div>
                </section>
                <section id="movieMainInfo">
                    <div className="movieDetails">
                        <h1>{movie.Title}</h1>
                        <p className="p1">{movie.Released}</p>
                        <div className="miniInfoAboutMovie">
                            <img className="movieImg" src={movie.Poster} alt={movie.Title}/>
                            <div className="info">
                                <h2>It has never been easier to watch<br /> free movies online</h2>
                                <p className="movieInfoP">Once you register for a free account with MovieMosaic, we’ll keep your place from <br /> screen to screen as long as you’re signed in. No matter what device you<br />
                                choose, your free movies will pick up where you left off with ease.</p>
                            </div>
                        </div>
                        <p className="plotP">{movie.Plot}</p>
                        <br />
                        <hr />
                        <p className="p1">Runtime: <span>{movie.Runtime}</span></p>
                        <p className="p1">Writer: <span>{movie.Writer}</span></p>
                        <p className="p1">Actors: <span>{movie.Actors}</span></p>
                        <p className="p1">Rating: <span>{movie.imdbRating}</span></p>
                        <p className="p1">Genre: <span>{movie.Genre}</span></p>
                        <p className="p1">Director: <span>{movie.Director}</span></p>
                        <p className="p1">Language: <span>{movie.Language}</span></p>
                        <p className="p1">Country: <span>{movie.Country}</span></p>
                        <p className="p1">Awards: <span>{movie.Awards}</span></p>
                        <p className="p1">Votes: <span>{movie.imdbVotes}</span></p>
                    </div>
                </section>
            </section>
        ) : (
            <p>Loading...</p>  
        )}
      </main>
  )
}

export default SearchPresentational;