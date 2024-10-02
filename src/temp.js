// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import './MovieListApp.css'; // Ensure this file is updated
// import LeftNav from './LeftNav'; // Import LeftNav component
// import OrderByDropdown from './OrderByDropdown'; // Import OrderByDropdown component
// import logo from './assets/images/logo192.png';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([
//     // { title: 'Inception', releaseDate: 2010, rating: 8.8, popularity: 90, price: 10, watched: true },
//     // { title: 'The Godfather', releaseDate: 1972, rating: 9.2, popularity: 95, price: 12, watched: false },
//     // { title: 'Interstellar', releaseDate: 2014, rating: 8.6, popularity: 88, price: 15, watched: true },
//     // { title: 'The Dark Knight', releaseDate: 2008, rating: 9.0, popularity: 98, price: 8, watched: true },
//     // { title: 'Pulp Fiction', releaseDate: 1994, rating: 8.9, popularity: 85, price: 11, watched: false }
//   {
//     title: 'Grand Theft Auto V',
//     image: 'https://link-to-your-image.com/image.jpg', // Replace with your image URL
//     releaseDate: 1972,
//     rating: 92,
//     price: 10,
//     liked: true,
//   },
//   {
//     title: 'The Godfather',
//     image: 'https://link-to-your-image.com/godfather.jpg',
//     releaseDate: 2014,
//     rating: 98,
//     price: 10,
//     liked: false,
//   },
//   {
//     title: 'Inception',
//     image: 'https://link-to-your-image.com/inception.jpg',
//     releaseDate: 1994,
//     rating: 91,
//     price: 10,
//     liked: true,
//   },
//   ]);

//   const [orderBy, setOrderBy] = useState('Name'); // Default to 'Name'
//   const [newMovie, setNewMovie] = useState('');

//   // Function to handle sorting logic
//   const sortMovies = (order) => {
//     const sortedMovies = [...movies]; // Create a copy of the movies array

//     switch (order) {
//       case 'Name':
//         sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
//         break;
//       case 'Release Date':
//         sortedMovies.sort((a, b) => a.releaseDate - b.releaseDate);
//         break;
//       case 'Rating':
//         sortedMovies.sort((a, b) => b.rating - a.rating); // Sort by rating in descending order
//         break;
//       case 'Liked':
//         sortedMovies.sort((a, b) => b.popularity - a.liked); // Sort by popularity in descending order
//         break;
//       case 'Price':
//         sortedMovies.sort((a, b) => a.price - b.price); // Sort by price in ascending order
//         break;
//       default:
//         break;
//     }

//     setMovies(sortedMovies); // Update the state with the sorted array
//   };

//   // Handle changes to the order option from OrderByDropdown
//   const handleOrderChange = (newOrder) => {
//     setOrderBy(newOrder); // Update the order state
//   };

//   // Sort movies whenever the orderBy state changes
//   useEffect(() => {
//     sortMovies(orderBy);
//   }, [orderBy]);

//   useEffect(() => {
//     const savedMovies = JSON.parse(localStorage.getItem('movies'));
//     if (savedMovies) {
//       setMovies(savedMovies);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('movies', JSON.stringify(movies));
//   }, [movies]);

//   const handleAddMovie = () => {
//     if (newMovie.trim() !== '') {
//       setMovies([...movies, { title: newMovie, watched: false }]);
//       setNewMovie('');
//     }
//   };

//   const handleToggleWatched = (index) => {
//     const updatedMovies = movies.map((movie, i) =>
//       i === index ? { ...movie, watched: !movie.watched } : movie
//     );
//     setMovies(updatedMovies);
//   };

//   const handleDeleteMovie = (index) => {
//     const updatedMovies = movies.filter((_, i) => i !== index);
//     setMovies(updatedMovies);
//   };

//   return (
//     <div className="app-container">
//       <div className="search-container">
//         <img src={logo} alt="Logo" className="logo" />
//         <input 
//           type="text" 
//           placeholder="Search Movie..." 
//           value={searchTerm} 
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//         />
//       </div>
//       <div className='main-container'>
//         <div className="left-nav-container">
//           <LeftNav />
//         </div>
//         <div className="main-content-container">
//           <h1>My Movie List</h1>
//           <OrderByDropdown orderBy={orderBy} onOrderChange={handleOrderChange} />

//           <div className="add-movie-container">
//             <input
//               type="text"
//               placeholder="Add a movie..."
//               value={newMovie}
//               onChange={(e) => setNewMovie(e.target.value)}
//               className="new-movie-input"
//             />
//             <button onClick={handleAddMovie}>Add Movie</button>
//           </div>
//           <ul className="movie-list">
//             {movies.map((movie, index) => (
//               <li key={index} className={movie.watched ? 'watched' : ''}>
//                 {movie.title}, {movie.releaseDate}, {movie.rating}, {movie.popularity}, {movie.price}
//                 <div className="movie-actions">
//                   <button onClick={() => handleToggleWatched(index)}>
//                     {movie.watched ? 'Unwatch' : 'Watched'}
//                   </button>
//                   <button onClick={() => handleDeleteMovie(index)}>Delete</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
