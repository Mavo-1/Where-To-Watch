import React from 'react';
import MovieCard from '../components/MovieCard';
import Post from "../components/Post"
import "../styles/MoviePage.css"

const MovieRoute = ({ searchResults}) => {
    return (
        <div className='moviePage'>
        
        <MovieCard className="sidecard" searchResults={searchResults} />
        <Post className="post" searchResults={searchResults}></Post>
        </div>
    )
}

export default MovieRoute;