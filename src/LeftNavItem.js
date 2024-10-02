import React from 'react';
import './LeftNav.css'; // Import your CSS file for styling

const LeftNavItem = ({ icon, text }) => {
  return (
    <li className="leftnav-item">
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
    </li>
  );
};

export default LeftNavItem;
