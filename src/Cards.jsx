import React from "react";

const Cards = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="card" key={user.id}>
            <img src={user.avatar} height="50px" alt="a user" />
            <div className="text">
              <p>{user.first_name + " " + user.last_name}</p>
              <p>{user.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
