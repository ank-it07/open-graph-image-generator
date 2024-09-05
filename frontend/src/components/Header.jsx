import React from "react";
import mediaLogo from "../assets/medial-purple-logo.png";

const Header = () => {
  return (<>

    <header className="flex justify-between items-center mx-10 p-4 bg-black text-white">
      <div className="flex items-center space-x-1">
        <img src={mediaLogo} alt="Media Logo" className="h-5 w-5" />
        <div className="text-xl font-bold">medial</div>
      </div>
      <nav>
        <ul className="flex  space-x-4">
          <li>Product</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Enterprise</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className="flex space-x-2">
        <button className="border border-white px-4 py-2 rounded">Log in</button>

        <button className="bg-purple-medial text-white px-4 py-2 rounded hover:bg-purple-700">
          Get started — it's free
        </button>
        
      </div>
    </header>
    
  </>
  );
};

export default Header;
