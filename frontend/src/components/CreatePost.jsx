import React, { useState } from 'react';
import axios from 'axios';
import Post from '../components/Post';


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save post data to your backend
    const postData = { title, content, image };
    const postId = await savePostToBackend(postData);

    // Generate OG image
    const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/generate-og-image`, { ...postData, id: postId });

    // Update post with generated image URL
    await updatePostWithImageUrl(postId, data.imageUrl);

    // Add the new post to the list of posts
    setPosts([...posts, { ...postData, Likes: 0, comments: 0, id: postId, image: data.imageUrl }]);

    // Clear form
    setTitle('');
    setContent('');
    setImage('');
  };

  const savePostToBackend = async (postData) => {
    // This function should save the post to your backend and return the post ID
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/posts`, postData); // Adjust the URL to your backend
    return response.data.id;
  };

  const updatePostWithImageUrl = async (postId, imageUrl) => {
    // This function should update the post with the OG image URL in your backend
    await axios.put(`${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`, { ogImageUrl: imageUrl });
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-4">
        <div className="mb-4">
          <label className="block text-white mb-2">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Content</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            className="w-full p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Image URL</label>
          <input 
            type="text" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            className="w-full p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Post</button>
      </form>
      <div className="w-full flex flex-col items-center">
        {posts.map(post => (
          <Post 
            key={post.id}
            username="User" // Adjust as needed
            time="Just now" // Adjust as needed
            content={post.content}
            comments={post.comments}
            Likes={post.Likes}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
