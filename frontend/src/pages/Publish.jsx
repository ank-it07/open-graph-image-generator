import React from 'react';
import Header from '../components/HeaderPost';
import Post from '../components/Post';

const posts = [
  {
    
    title: 'Day 64: The Power of Partnerships',
    time: 'one hour ago',
    content:"Building a successful startup often involves more than just a great product or idea. Strategic partnerships can be the key to unlocking new markets, accessing resources, and accelerating growth. Here's how to make partnerships work for your Bengaluru startup",
    comments: 208,
    Likes: 1208,
    imageUrl: 'https://image-assets.medial.app/postImages/66b0eb9c30ff4700793ce666_0.8018784138246255.jpg?v=1722870684204'
  },
  {
    title: 'And the US market is a bloodbath. Will continue for a while now',
    time: 'two hours ago',
    content: 'The US market is currently experiencing a significant downturn, often described as a bloodbath, with widespread declines in stock prices and investor sentiment. This turmoil is expected to persist for some time, as ongoing economic uncertainties and potential shifts in monetary policy weigh heavily on market performance.',
    comments: 678,
    Likes: 4309,
    imageUrl: 'https://image-assets.medial.app/postImages/66b0e784b75a4e2278eb667a_0.3325613421968172.png?v=1722869636685'
  },
  {
    title: 'good developers lmao',
    time: 'six hours ago',
    content: 'In the ever-evolving tech landscape, the term "good developers" often evokes a mix of admiration and frustration. While the industry is filled with talented individuals who possess a deep understanding of code, problem-solving skills, and innovative thinking, the disparity in quality and effectiveness among developers can be striking.',
    comments: 324,
    Likes: 2038,
    imageUrl: 'https://image-assets.medial.app/postImages/66af8ee8aa6556138e6aafe3_0.1758010976287543.jpg?v=1722781416993'
  }
];

const Publish = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow bg-black justify-center items-center"> {/* Updated background color */}
        <main className="flex flex-col items-center p-4 w-full max-w-2xl">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default Publish;
