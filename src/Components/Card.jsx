import React from "react";

const Card = ({ fName, lName, profPic, email, position }) => {
  return (
    <div className="card">
      <img src={profPic} alt="profile pic" className="card__Image" />
      <p className="card__Name">
        {fName} {lName}
      </p>
      <p className="card__Email">{email}</p>
      <p className="card__Position">{position}</p>
    </div>
  );
};

export default Card;
