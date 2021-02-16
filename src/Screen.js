import React from "react";
import Header from "./Header";

const Screen = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <h1>First Screen</h1>
    </>
  );
};

export default Screen;
