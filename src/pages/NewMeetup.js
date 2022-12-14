import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const handleAddNewMeetup = (newMeetupData) => {
    fetch(
      "https://meetup-app-nextjs-course-default-rtdb.asia-southeast1.firebasedatabase.app//meetups.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMeetupData),
      }
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addNewMeetup={handleAddNewMeetup} />
    </section>
  );
};

export default NewMeetupPage;
