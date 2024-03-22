import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
} from "reactstrap";




const MovieCard = ({ searchResults }) => {
 // Assuming searchResults is an array of movie objects
 if (!searchResults || searchResults.length === 0) {
  return null; // or render a placeholder image or message
}
const movie = searchResults[0]; // Assuming you want to display the first movie

  return (
    <Card className="mb-3">
      <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <CardBody>
        <CardTitle tag="h5">{movie.title}</CardTitle>
        {/* Add more movie details as needed */}
      </CardBody>
    </Card>
  );
};

export default MovieCard;
