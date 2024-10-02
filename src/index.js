import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './MovieListApp.css'; // Ensure this file is updated
import LeftNav from './LeftNav'; // Import LeftNav component
import OrderByDropdown from './OrderByDropdown'; // Import OrderByDropdown component
import MovieCard from './MovieCard'; // Import the MovieCard component

import logo from './assets/images/logo192.png';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([
    {
      title: 'Coraline',
      image: 'https://m.media-amazon.com/images/I/81JPKdfJjdL._AC_UF894,1000_QL80_.jpg', // Replace with your image URL
      releaseDate: 2009,
      rating: 5,
      price: 11.99,
      liked: true,
    },
    {
      title: 'The Godfather',
      image:'https://www.posterazzi.com/the-godfather-movie-poster-print-11-x-17-item-movib38265/',
      releaseDate: 1972,
      rating: 2.4,
      price: 15.50,
      liked: false,
    },
    {
      title: 'Interstellar',
      image:'https://www.amazon.com/Interstellar-Picture-Paintings-Bedroom-Decoration/dp/B09XXT3R8F',
      releaseDate: 2014,
      rating: 5,
      price: 12.99,
      liked: true,
    },
    {
      title: 'Oppenheimer',
      image:'https://www.amazon.com/Oppenheimer-Movie-Poster-11x17-Unframed/dp/B0C4JKPSNB',
      releaseDate: 2001,
      rating: 3.8,
      price: 9.50,
      liked: true,
    }
  ]);

  const [orderBy, setOrderBy] = useState('Name'); // Default to 'Name'

  // Sort movies whenever the orderBy state changes
  useEffect(() => {
    const sortMovies = (order) => {
      const sortedMovies = [...movies];

      switch (order) {
        case 'Name':
          sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'Release Date':
          sortedMovies.sort((a, b) => a.releaseDate - b.releaseDate);
          break;
        case 'Rating':
          sortedMovies.sort((a, b) => b.rating - a.rating);
          break;
        case 'Liked':
          sortedMovies.sort((a, b) => (b.liked === a.liked ? 0 : b.liked ? -1 : 1));
          break;
        case 'Price':
          sortedMovies.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }

      setMovies(sortedMovies);
    };

    sortMovies(orderBy);
  }, [orderBy]);

  // Handle changes to the order option from OrderByDropdown
  const handleOrderChange = (newOrder) => {
    setOrderBy(newOrder); // Update the order state
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <img src={logo} alt="Logo" className="logo" />
        <input 
          type="text" 
          placeholder="Search Movie..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className='main-container'>
        <div className="left-nav-container">
          <LeftNav />
        </div>
        <div className="main-content-container">
          <h1>My Movie List</h1>
          <OrderByDropdown orderBy={orderBy} onOrderChange={handleOrderChange} />

          <div className="movie-list">
            {/* Map through the movies array and render each MovieCard */}
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                price={movie.price}
                liked={movie.liked}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
