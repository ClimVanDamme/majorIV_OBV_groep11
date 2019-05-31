import React from "react";
import { inject, PropTypes, observer } from "mobx-react";

const ShowList = ({ showStore }) => {
  const { shows } = showStore;
  return (
    <ul>
      {shows.length > 0 ? (
        shows.map(show => <li key={show.title}>{show.title}</li>)
      ) : (
        <p>Oepsie! Geen voorstellingen gevonden.</p>
      )}
    </ul>
  );
};

ShowList.propTypes = {
  showStore: PropTypes.observableObject.isRequired
};

export default inject(`showStore`)(observer(ShowList));
