// src/components/Headerog.jsx
import React from 'react';
import medialLogo from '../assets/medial-purple-logo.png'; // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';


const Headerog = () => {
  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    navigate('/createpost');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="relative flex justify-center items-center h-16 bg-black text-white">
      <button 
        onClick={handleHomeClick} 
        className="absolute left-4 bg-purple-medial text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Home
      </button>
      <img src={medialLogo} alt="Medial Logo" className="h-10 mx-4" />
      <span className="text-2xl font-bold">Medial</span>
      <button 
        onClick={handleCreatePostClick} 
        className="absolute right-4 bg-purple-medial text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        See Post
      </button>
    </div>
  );
};

export default Headerog;
