import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  isMeetupFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = (props) => {
  const [userFavourites, setUserFavourites] = useState([]);

  const handleAddToFavourites = (favouriteMeetup) => {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  };

  const handleRemoveFromFavourites = (meetupId) => {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const handleCheckIfMeetupIsFavourite = (meetupId) => {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: handleAddToFavourites,
    removeFavourite: handleRemoveFromFavourites,
    isMeetupFavourite: handleCheckIfMeetupIsFavourite,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
