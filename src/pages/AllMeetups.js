import React, { useState, useEffect } from "react";

// Components
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://meetup-app-nextjs-course-default-rtdb.asia-southeast1.firebasedatabase.app//meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allMeetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          allMeetups.push(meetup);
        }

        setLoadedMeetups(allMeetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
