import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogsListing from "./pages/BlogsListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogsListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
