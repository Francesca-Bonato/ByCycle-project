import React, { useState } from "react";

export const Context = React.createContext();

export default function LocalData({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const formattedBirthDate = user
    ? user.birth_date.split("/").reverse().join("-")
    : null;

  const formattedJoinDate = user
    ? user.join_date.split("/").reverse().join("-")
    : null;

  const initialProfile = {
    userName: user && user.username !== null ? user.username : "",
    firstName: user && user.firstName !== null ? user.firstName : "",
    lastName: user && user.lastName !== null ? user.lastName : "",
    email: user && user.email !== null ? user.email : "myUsermail",
    birthDate: user && user.birth_date !== null ? formattedBirthDate : "",
    joinDate: user && user.join_date !== null ? formattedJoinDate : "Not found",
    description:
      user && user.description !== null
        ? user.description
        : "Write a short description about yourself.",
    profilePicture: user && user.profilePic !== null ? user.profilePic : null,
  };
  return (
    <Context.Provider value={{ user, initialProfile }}>
      {children}
    </Context.Provider>
  );
}
