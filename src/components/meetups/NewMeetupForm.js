import React from "react";

// CSS
import classes from "./NewMeetupForm.module.css";

// Components
import Card from "../ui/Card";

const NewMeetupForm = () => {
  return (
    <Card>
      <form action="" className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" name="" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Title</label>
          <input type="url" name="" id="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" name="" id="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea name="" id="description" rows="5" required></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
