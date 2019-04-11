import React from "react";

const Friend = ({ friend }) => {
  return (
    <>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </>
  );
};
export default Friend;
