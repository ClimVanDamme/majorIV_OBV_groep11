import React from "react";
import { Link } from "react-router-dom";
import { inject, PropTypes, observer } from "mobx-react";
import styles from "./ShowList.module.css";

const ShowList = ({ showStore }) => {
  const { shows } = showStore;
  return (
    <ul className={styles.showGrid}>
      {shows.length > 0 ? (
        shows.map(show => (
          <li key={show.title} className={styles.showWrapper}>
            <Link to={`/shows/${show.id}`} className={styles.listItem}>
              <h3 className={styles.showTitle}>{show.title}</h3>

              {/* <img
                className={styles.showImg}
                src={`./assets/img/${show.title
                  .replace(/\s+/g, `-`)
                  .toLowerCase()}.png`}
                alt={`sfeerbeeld uit ${show.title}`}
              /> */}

              <picture className={styles.showImg}>
                <source
                  media="(max-width: 607px)"
                  srcSet={`/assets/img/${show.title
                    .replace(/\s+/g, `-`)
                    .toLowerCase()}.png`}
                />

                <source
                  media="(max-width: 1920px)"
                  srcSet={`/assets/img/${show.title
                    .replace(/\s+/g, `-`)
                    .toLowerCase()}-sm.png`}
                />
                {/* <source

                  // srcSet={`./assets/img/${show.title
                  //   .replace(/\s+/g, `-`)
                  //   .toLowerCase()}-sm.png 608w, ./assets/img/${show.title
                  //   .replace(/\s+/g, `-`)
                  //   .toLowerCase()}.png 320w`}
      

                  sizes="100vw"
                  type="image/png"
                /> */}

                <img
                  width="278"
                  src={`%PUBLIC_URL%/assets/img/${show.title
                    .replace(/\s+/g, `-`)
                    .toLowerCase()}.png`}
                  alt={`sfeerbeeld uit ${show.title}`}
                />
              </picture>
            </Link>
          </li>
        ))
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
