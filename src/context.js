import React, { useState } from "react";

export const LangContext = React.createContext();

const Lang = ({ children, defaultLang, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  return (
    <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>
  );
};

export default Lang;
