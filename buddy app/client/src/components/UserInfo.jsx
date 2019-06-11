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
          edit
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
