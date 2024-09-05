import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook } from 'react-icons/fa'; // Import the icon you want to use

const Hero = () => {
    const navigate = useNavigate();

    const handleCreatePostClick = () => {
        navigate('/createpost');
    };
    const genogimage = () => {
        navigate('/PostForm');
    };
    return (
        <div className="bg-black text-white text-center p-16">
            <h1 className="text-3xl font-bold mb-4">Welcome to Medial</h1>
            <p className="mb-8">Follow these steps to generate OG images:</p>
            <ol className="text-left list-decimal list-inside mx-auto mb-8 max-w-lg">
                <li className="mb-2">Click on <strong>See/Create Post</strong> to view recent posts.</li>
                <li className="mb-2">In a post, click the share button to copy the post link.</li>
                <li className="mb-2">Click on <strong>Generate OG image</strong>, paste the copied URL into the input box, and see the OG image preview.</li>
                <li className="mb-2">You can also paste any website URL, and if it returns an image, an OG image will be generated. So you can also go to the <strong>Generate OG image</strong> directly.</li>
            </ol>
            <button onClick={handleCreatePostClick} className="mt-6 bg-purple-medial text-white px-4 py-2 rounded hover:bg-purple-700 mx-5">See/Create Post</button>
            <button onClick={genogimage} className="mt-6 bg-purple-medial text-white px-4 py-2 rounded hover:bg-purple-700 mx-5">Generate OG image</button>
            <a href="https://docs.google.com/document/d/1kzdu8zZpngCcbSXa8D_G2iXumcmewevVlGqId7CHsJk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 text-purple-medial underline flex items-center justify-center">
                <FaBook className="mr-2" /> See Documentation
            </a>
        </div>
    );
};

export default Hero;
