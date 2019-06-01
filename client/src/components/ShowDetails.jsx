import React from "react";
import { inject, PropTypes, observer } from "mobx-react";

const ShowDetails = ({ showStore, id }) => {
  const { shows } = showStore;
  return (
    <div>
      {shows.map(show =>
        show.id === id ? (
          <div key={show.title}>
            <p>{show.title}</p>
            <p>{show.description}</p>
          </div>
        ) : (
          console.log(`geen match`)
        )
      )}
    </div>
  );
};

ShowDetails.propTypes = {
  showStore: PropTypes.observableObject.isRequired
};

export default inject(`showStore`)(observer(ShowDetails));
