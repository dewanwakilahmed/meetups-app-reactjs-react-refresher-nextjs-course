import React from "react";

// Components
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addNewMeetup = (newMeetupData) => {};

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addNewMeetup={addNewMeetup} />
    </section>
  );
};

export default NewMeetupPage;
