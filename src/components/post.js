import React from "react";
import "../styles/Post.css"

// const capitalName = (name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1);
// };



const Post = ({ searchResults}) => {
  if (!searchResults || searchResults.length === 0) {
    return null;
  }

  const movie = searchResults[0];
  return (
    <div className="post">
      <div>
        <h1>Movie Overview:</h1>
        <p className="intro">{movie.overview}</p>
      </div>

      <div className="post-content"></div>
    </div>
  );
};

export default Post;
