// NPM packages
import { useState } from "react";

// Project files
import Logo from "../assets/images/logo-white.svg";
import i18n from "../scripts/i18n";

export default function NavigationBar() {
  // Local state
  const [language, setLanguage] = useState("en");

  // Properties
  const label = language === "en" ? "es 🇪🇸" : "en 🇬🇧";

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
    <nav id="navigation-bar">
      <div className="container">
        <img src={Logo} alt="The company name written with white letters" />
        <button className="button-language" onClick={toggleLanguage}>
          {label}
        </button>
      </div>
    </nav>
  );
}
