import React, { useContext } from "react";

// CSS
import classes from "./MeetupItem.module.css";

// Components
import Card from "../ui/Card";

// Context
import FavouritesContext from "../../contexts/favourites-context";

const MeetupItem = (props) => {
  const favouritesCtx = useContext(FavouritesContext);

  const isMeetupFavourite = favouritesCtx.isMeetupFavourite(props.id);

  const handleToggleFavouriteStatus = () => {
    if (isMeetupFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={handleToggleFavouriteStatus}>
            {isMeetupFavourite ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
