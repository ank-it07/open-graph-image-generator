import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

// const features = [
//     // {
//     //     title: 'Search Result Preview',
//     //     content: (
//     //         <>
//     //             <p>Lighting techniques for your plant photography | Invictos™</p>
//     //             <span>https://www.website.edu</span>
//     //             <p>Explore Invictos' strategies, and how we are staying ahead. Deep dive on what the future of learning and education will be.</p>
//     //         </>
//     //     ),
//     // },
//     // {
//     //     title: 'Choose heading type',
//     //     content: (
//     //         <select className="mt-2 p-2 border rounded">
//     //             <option>H1</option>
//     //             <option>H2</option>
//     //             <option>H3</option>
//     //             <option>H4</option>
//     //             <option>H5</option>
//     //             <option>H6</option>
//     //         </select>
//     //     ),
//     // },
//     {
//         title: 'Google Lighthouse',
//         content: (
//             <div className="flex flex-col items-center text-green-500 text-2xl">
//                 <div>100</div>
//                 <div>SEO</div>
//             </div>
//         ),
//     },
//     {
//         title: 'Open Graph preview',
//         content: (
//             <>
//                 <p>Manifesto | Invictos™</p>
//                 <span>https://www.invictos.edu</span>
//                 <p>Revolutionizing education with our unique manifesto that champions innovation, inclusivity, and excellence.</p>
//             </>
//         ),
//     },
// ];

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
