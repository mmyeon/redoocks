import React, { useContext, useState } from "react";

export const LangContext = React.createContext();

const Lang = ({ children, defaultLang, translations }) => {
  const [lang, setLang] = useState(defaultLang);

  const hyperTranslate = (text) => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };

  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export default Lang;
