import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
} from "reactstrap";
import "../styles/MovieCard.css"



const MovieCard = ({ searchResults }) => {
  if (!searchResults || searchResults.length === 0) {
    return null;
  }

  const movie = searchResults[0];

  return (
    <div className="body">
      <Card className="side-card" color="secondary">
        <CardImg
          top
          width="100%"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <CardBody>
          <CardTitle tag="h5">{movie.title}</CardTitle>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Release Year:</strong>{" "}
            {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
          </p>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
