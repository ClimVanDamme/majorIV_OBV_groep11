import React, { useState } from "react";
import styles from "./UserInfo.module.css";

const UserInfo = ({ user, noOfChar, logout }) => {
  const [edit, changeEdit] = useState(false);

  const connections = noOfChar * 4;
  const birthday = new Date(user.birthdate);

  const calculateAge = birthday => {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const formatDate = date => {
    var d = new Date(date),
      month = `` + (d.getMonth() + 1),
      day = `` + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = `0` + month;
    if (day.length < 2) day = `0` + day;

    return [year, month, day].join(`-`);
  };

  const age = calculateAge(birthday);
  const formattedDate = formatDate(birthday);

  const handleSubmitForm = e => {
    e.preventDefault();
    changeEdit(false);
    console.log(`submit`);
  };

  return !edit ? (
    <>
      <div className={styles.edit}>
        <button className={styles.editButton} onClick={() => changeEdit(true)}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="23.3px"
            height="24.2px"
            viewBox="0 0 23.3 24.2"
          >
            <defs />
            <circle className={styles.st0} cx="11.7" cy="12.2" r="5" />
            <path
              className={styles.st0}
              d="M3,10.5L1.5,9.4C1,9.2,0.9,8.6,1.2,8.2L2.9,5c0.2-0.4,0.8-0.6,1.2-0.4L6,5.3c0.3,0.1,0.6,0.1,0.8-0.1l1.5-0.9
          c0.2-0.1,0.4-0.4,0.4-0.7l0.2-2c0.1-0.5,0.5-0.9,1-0.9h3.6c0.5,0,0.9,0.4,1,0.8l0.3,2.1c0,0.2,0.2,0.5,0.4,0.6l1.6,1.1
          c0.3,0.2,0.6,0.2,0.9,0.1l1.7-0.8c0.5-0.2,1,0,1.3,0.4l1.8,3c0.3,0.4,0.2,1-0.2,1.3l-1.7,1.4c-0.2,0.1-0.3,0.3-0.3,0.5l-0.3,1.3
          c-0.1,0.3,0.1,0.7,0.4,0.9l1.5,1.1c0.4,0.3,0.5,0.8,0.3,1.3L20.3,19c-0.2,0.4-0.8,0.6-1.2,0.4l-1.9-0.7c-0.3-0.1-0.6-0.1-0.9,0.1
          l-1.4,1c-0.2,0.1-0.3,0.4-0.4,0.6l-0.2,2c-0.1,0.5-0.5,0.9-1,0.9H9.9c-0.5,0-0.9-0.4-1-0.8l-0.3-2.1c0-0.2-0.2-0.5-0.4-0.6l-1.6-1.1
          c-0.3-0.2-0.6-0.2-0.9-0.1L4,19.5c-0.5,0.2-1,0-1.3-0.4l-1.8-3c-0.3-0.4-0.2-1,0.2-1.3l1.7-1.4c0.2-0.1,0.3-0.4,0.3-0.6l0.2-1.5
          C3.4,11,3.3,10.7,3,10.5z"
            />
          </svg>
        </button>
      </div>
      <div className={styles.infoGrid}>
        <h2 className={styles.name}>
          {user.firstname} {user.lastname}
        </h2>
        <p className={styles.info}>
          {user.gender}, {age} jaar
        </p>
        <div className={styles.stats}>
          <div className={styles.column}>
            <p className={styles.subTitle}>peronages</p>
            <p className={styles.amount}>{noOfChar}</p>
          </div>
          <div className={styles.column}>
            <p className={styles.subTitle}>connecties</p>
            <p className={styles.amount}>{connections}</p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <form onSubmit={handleSubmitForm}>
        <h1 className="hide">Profiel</h1>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={user.firstname}
          onChange={e => user.setFirstname(e.currentTarget.value)}
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={user.lastname}
          onChange={e => user.setLastname(e.currentTarget.value)}
        />
        <div>
          {user.gender === `male` ? (
            <label>
              <input
                type="radio"
                id="man"
                name="gender"
                value="man"
                defaultChecked
              />
              man
            </label>
          ) : (
            <label>
              <input type="radio" id="man" name="gender" value="man" />
              man
            </label>
          )}
        </div>
        <div>
          {user.gender === `female` ? (
            <label>
              <input
                type="radio"
                id="vrouw"
                name="gender"
                value="vrouw"
                defaultChecked
              />
              vrouw
            </label>
          ) : (
            <label>
              <input type="radio" id="vrouw" name="gender" value="vrouw" />
              vrouw
            </label>
          )}
        </div>
        <input type="date" value={formattedDate} />
        <input type="submit" />
      </form>
      <button onClick={logout}>uitloggen</button>
    </>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
