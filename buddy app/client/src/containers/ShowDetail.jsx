import React from "react";
import ShowDetails from "../components/ShowDetails";

const ShowDetail = ({ match }) => {
  const id = match.params.id;
  return (
    <section>
      <ShowDetails id={id} />
    </section>
  );
};

export default ShowDetail;
