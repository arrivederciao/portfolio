// ./App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Blog from './components/pages/blog';
import BlogPage from './components/pages/blogPage';
import Login from './components/pages/login';
import BackToTopButton from './components/button/backToTop';
import BlogInbox from './components/pages/BlogInbox';

function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/page/:id" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bloginbox" element={<BlogInbox />} />
      </Routes>
      <BackToTopButton />
    </Router>
  );
}

export default App;
