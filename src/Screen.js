import React, { useContext } from "react";
import { LangContext } from "./context";

const Screen = () => {
  const { lang } = useContext(LangContext);
  console.log(lang);

  return (
    <>
      <h1>Hello!</h1>
      <button>Translate</button>
    </>
  );
};

export default Screen;
