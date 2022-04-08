// NPM packages
import { useState } from "react";

// Project files
import UKFlag from "../assets/images/en.svg";
import SpainFlag from "../assets/images/es.svg";
import i18n from "../scripts/i18n";

export default function ButtonTrasnlate() {
  // Local state
  const [language, setLanguage] = useState("en");

  // Properties
  const label = language === "en" ? "es" : "en";
  const flag = language === "en" ? SpainFlag : UKFlag;

  // Methods
  function toggleLanguage() {
    if (language === "en") {
      i18n.changeLanguage("es");
      setLanguage("se");
    } else {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }

  return (
    <button className="button-translate" onClick={toggleLanguage}>
      <span className="label">{label}</span>
      <img
        className="flag"
        src={flag}
        alt="The country flag of the choosen language"
      />
    </button>
  );
}
