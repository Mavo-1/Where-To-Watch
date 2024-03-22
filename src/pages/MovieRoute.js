import React from 'react';
import MovieCard from '../components/MovieCard';



const MovieRoute = ({ searchResults}) => {
    return (
        <div>
        
        <MovieCard searchResults={searchResults} />;
        
        </div>
    )
}

export default MovieRoute;