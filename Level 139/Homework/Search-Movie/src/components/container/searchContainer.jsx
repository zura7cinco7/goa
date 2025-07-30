import { useEffect, useState } from 'react';
import SearchPresentational from '../Presentational/SearchPresentational';

const SearchContainer = () => {
    const [movie, setMovie] = useState(null);
    const handleSearch = async (movie) => {
        try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=663ecb2a&t=${movie}`);
        const data = await response.json();

        if(data.Response === "False"){
            setMovie(null);
            return;
        }
    
        setMovie(data);
        } catch (err) {
            console.log(err);
        }
    }
    

    useEffect(() => {
        handleSearch('The pianist');
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();
        const movie = e.target.movie.value;

        handleSearch(movie);

        e.target.reset();
    }

    return <SearchPresentational handleSubmit={handleSubmit} movie={movie} />
}

export default SearchContainer;