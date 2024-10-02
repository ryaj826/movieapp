import React from 'react';
import './MovieCard.css'; // Ensure to include the styles

const MovieCard = ({ title, image, rating, price, liked }) => {
  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={image} alt={title} className="movie-image" />
      </div>
      <div className="movie-info">
        <div className="movie-details">
          <h2>{title}</h2>
          <div className="rating">
            <span>{rating}</span>
          </div>
          <div className="price">
            <span>${price}</span>
          </div>
          <div className="actions">
            <span className="thumbs-up">{liked ? '👍' : '👎'}</span>
            <button className="heart-button">
              <i className={liked ? 'fas fa-heart liked' : 'far fa-heart'}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
