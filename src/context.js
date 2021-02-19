import React, { useContext, useState } from "react";

export const LangContext = React.createContext();

const Lang = ({ children, defaultLang, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  console.log(lang);

  return (
    <LangContext.Provider value={{ setLang }}>{children}</LangContext.Provider>
  );
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export default Lang;
