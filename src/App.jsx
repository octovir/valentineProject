import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from "./pages/Home";
import Love from './pages/Love';
import Linkpage from './pages/Linkpage';
import Video from './pages/Video';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<Love />} />
        <Route path="/link" element={<Linkpage />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
