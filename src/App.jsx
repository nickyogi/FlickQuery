import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";
import Trending from "./assets/Components/Trending";
import Popular from "./assets/Components/Popular";
import Movie from "./assets/Components/Movie";
import TV from "./assets/Components/TV";
import People from "./assets/Components/People";
import "./App.css";
import MovieDetail from "./assets/Components/MovieDetail";
import TVDetail from "./assets/Components/TVDetail";
import PeopleDetail from "./assets/Components/PeopleDetail";
import Trailer from "./assets/Components/partials/Trailer";
import Contact from "./assets/Components/Contact";
import About from "./assets/Components/About";

function App() {

  return (
    <div className="min-h-screen w-screen p-0 m-0 bg-[#1F1E24] overflow-y-auto">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetail />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TV />} />
        <Route path="/tv/details/:id" element={<TVDetail />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PeopleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
