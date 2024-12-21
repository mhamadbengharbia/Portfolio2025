import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='nav-1 '>
        <p className='nav-p'>+216 21 420 848</p>
        <button className='btn-1'>Call</button>
        <button className='btn-1'>CV</button>
      </div>
      <div className='nav-2'>
      <a href="https://www.linkedin.com/in/your-profile" className="nav-link">LinkedIn</a>
      <p>/</p>
  <a href="https://github.com/your-username" className="nav-link">GitHub</a><p>/</p>
  <a href="mailto:your-email@example.com" className="nav-link">Mail</a>
      </div>


    </div>
  );
}

export default Navbar;
