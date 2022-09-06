import React, { useContext } from "react";

// Components
import MeetupList from "../components/meetups/MeetupList";

// Context
import FavouritesContext from "../contexts/favourites-context";

const FavouritesPage = () => {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have no Favourites yet! Please add some...</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>

      {content}
    </section>
  );
};

export default FavouritesPage;
