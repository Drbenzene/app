import './App.css';
import React from "react";
import About from "./Components/Pages/About";
import Comments from "./Components/Pages/Comments";
import Contact from "./Components/Pages/Contact";
import Photo from "./Components/Pages/Photo";
import Todo from "./Components/Pages/Todo";
import Home from "./Components/Screens/Home";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Post from './Components/Pages/Post';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/photo" element={<Photo/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/post" element={<Post/>} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
