import React, { useContext } from "react";
import { Link } from "react-router-dom";

// CSS
import classes from "./MainNavigation.module.css";

// Context
import FavouritesContext from "../../contexts/favourites-context";

const MainNavigation = () => {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>
                {favouritesCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
