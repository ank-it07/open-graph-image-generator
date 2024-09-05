import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineLightMode } from 'react-icons/md';
import Headerog from '../components/Headerog';

const PostForm = () => {
  const [url, setUrl] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [ogImage, setOgImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/og-image`, {
        params: { url },
        responseType: 'blob'
      });
  
      const imageUrl = URL.createObjectURL(response.data);
      setOgImage(imageUrl);
  
    } catch (error) {
      console.error('Error generating OG image:', error);
    }
  };

  return (
    <>
      <Headerog />
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-6`}>
        <div className={`w-full max-w-2xl mx-auto p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg shadow-md`}>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500' : 'bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-200'}`}
            >
              <MdOutlineLightMode className="mr-2" />
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-2">URL:</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-800'} rounded-lg focus:outline-none focus:ring ${darkMode ? 'focus:ring-gray-500' : 'focus:ring-blue-200'}`}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 ${darkMode ? 'bg-purple-medial hover:bg-purple-700 focus:ring-blue-600' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400'} text-white font-bold rounded-lg focus:outline-none focus:ring-2`}
            >
              Generate OG Image
            </button>
          </form>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Image Preview:</h2>
            {url && (
              <div className="mb-4">
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline max-w-full break-words">
                  {url}
                </a>
              </div>
            )}
            <div className={`border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4 rounded-lg`}>
              {ogImage ? (
                <img src={ogImage} alt="OG Preview" className="w-full rounded-lg" />
              ) : (
                <p>No preview available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForm;
