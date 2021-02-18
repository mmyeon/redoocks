import React from "react";
import { useFns } from "./context";
import Header from "./Header";

const Screen = () => {
  const { logUserIn } = useFns();

  return (
    <>
      <Header />
      <h1>First Screen</h1>
      <button onClick={logUserIn}>Log user in</button>
    </>
  );
};

export default Screen;
