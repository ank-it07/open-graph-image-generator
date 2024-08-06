import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Publish from './pages/Publish'
import PostForm from './pages/PostForm'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/blog/:id" element={<Blog />} /> */}
          {/* <Route path="/posts" element={<Posts />} /> */}
          <Route path="/createpost" element={<Publish />} />
          <Route path="/PostForm" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App