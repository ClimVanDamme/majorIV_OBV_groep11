import React, { useState } from "react";

const UserInfo = ({ user }) => {
  const [edit, changeEdit] = useState(false);

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
      <h1 className="hide">Profiel</h1>
      <button onClick={() => changeEdit(true)}>edit</button>
      <h2>{user.firstname}</h2>
      <p>{user.lastname}</p>
      <p>{user.gender}</p>
      <p>{age}</p>
    </>
  ) : (
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
  );
};

UserInfo.propTypes = {};

export default UserInfo;
