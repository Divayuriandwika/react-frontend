import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import NotFound from './pages/not-found'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

// api example
// https://jsonplaceholder.typicode.com/photos

export default App
