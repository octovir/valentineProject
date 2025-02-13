import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from "./pages/Home"
import Love from './pages/Love';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<Love />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
