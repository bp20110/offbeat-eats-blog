import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import BlogCreate from './components/BlogCreate';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<BlogCreate />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;