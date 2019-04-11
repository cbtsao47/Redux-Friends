import React from "react";
import Friend from "./Friend";
const FriendsList = ({ friends }) => {
  return (
    <>
      {friends.map(frd => (
        <Friend key={frd.id} friend={frd} />
      ))}
    </>
  );
};

export default FriendsList;
