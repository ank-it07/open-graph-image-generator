import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mediaLogo from "../assets/medial-purple-logo.png";
import { FaHotjar } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { GiSparkles } from "react-icons/gi";

const HeaderPost = () => {
  const navigate = useNavigate();

  const genogimage = () => {
    navigate("/PostForm");
  };

  const handleHomeClick = () => {
    navigate('/');
  };


  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center">
        <button onClick={handleHomeClick} className="mr-4 p-2 bg-purple-medial text-white px-4 py-2 rounded hover:bg-purple-700">
          Home
        </button>
        <img src={mediaLogo} alt="Media Logo" className="h-5 w-5 mr-2" />
        <div className="text-xl font-bold">medial</div>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="flex items-center space-x-1">
            <FaHotjar />
            <Link to="/hot" className="hover:underline">
              Hot
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <IoIosTrendingUp />
            <Link to="/trending" className="hover:underline">
              Trending
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <GiSparkles />
            <Link to="/new" className="hover:underline">
              New
            </Link>
          </li>
        </ul>
      </nav>
      <div className="relative flex items-center">
        <button
          onClick={genogimage}
          className="bg-purple-medial text-white px-4 py-2 rounded hover:bg-purple-700 mx-5"
        >
          Generate OG image
        </button>
        <input
          type="text"
          placeholder="Find a community or post"
          className="p-2 rounded border border-gray-300"
        />
      </div>
    </header>
  );
};

export default HeaderPost;
