// LeftNav.js

import React, { useState } from 'react';
import LeftNavItem from './LeftNavItem';
import { FaGamepad, FaPuzzlePiece, FaFistRaised, FaBook } from 'react-icons/fa'; // Import icons from react-icons (or any library)

const genres = [
  { text: 'Action', icon: <FaFistRaised /> },
  { text: 'Comedy', icon: <FaGamepad /> },
  { text: 'Horror', icon: <FaPuzzlePiece /> },
  { text: 'Drama', icon: <FaBook /> },
  // Add more genres with corresponding icons
];

const LeftNav = () => {
  return (
    <div>
      <h2>Genres</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 10 }}>
        {genres.map((genre, index) => (
          <LeftNavItem key={index} icon={genre.icon} text={genre.text} />
        ))}
      </ul>
    </div>
  );
};

export default LeftNav;
