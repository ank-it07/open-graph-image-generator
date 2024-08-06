import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const postStyle = {
  maxWidth: '1000px', // Limit the width of each post card
  width: '100%',     // Make the post card take full width within the max limit
  marginBottom: '20px'  // Add space between the post cards
};

function Post({ title, time, content, comments, Likes, imageUrl }) {
  const [showShareUrl, setShowShareUrl] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (imageUrl) {
      setShareUrl(encodeURI(`http://yourdomain.com/share?title=${title}&content=${content}&imageUrl=${imageUrl}`));
    }
  }, [title, content, imageUrl]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
      .then(() => alert('URL copied to clipboard!'))
      .catch(err => alert('Failed to copy URL.'));
  };

  return (
    <div style={postStyle} className="flex flex-col bg-black text-white p-4 shadow rounded">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={content.length > 150 ? `${content.substring(0, 150)}...` : content} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content.length > 150 ? `${content.substring(0, 150)}...` : content} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={content.length > 150 ? `${content.substring(0, 150)}...` : content} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">{title}</span>
        <span className="text-gray-500">{time}</span>
      </div>
      <div className="flex flex-col mb-4">
        <p>{content}</p>
        {imageUrl && <img src={imageUrl} alt="Post visual" className="mt-2 rounded max-w-full h-auto" />}
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{Likes} Likes</span>
        <span>{comments} comments</span>
        <button
          onClick={() => setShowShareUrl(true)}
          className="ml-4 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Share
        </button>
      </div>

      {showShareUrl && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-sm w-full">
            <h3 className="font-bold text-lg mb-2">Share this post</h3>
            <p className="mb-4 text-sm text-gray-800 truncate">{shareUrl}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={copyToClipboard}
                className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Copy URL
              </button>
              <button
                onClick={() => setShowShareUrl(false)}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
