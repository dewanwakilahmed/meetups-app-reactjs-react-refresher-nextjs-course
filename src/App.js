import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
  );
};

export default App;
