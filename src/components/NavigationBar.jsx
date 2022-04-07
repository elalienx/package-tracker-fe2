// NPM packages
import { useState } from "react";

// Project files
import i18n from "../scripts/i18n";

export default function NavigationBar() {
  // Local state
  const [language, setLanguage] = useState("en");

  // Properties
  const label = language === "en" ? "Español 🇪🇸" : "English 🇬🇧";

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
    <nav id="navigation-bar" className="container">
      <span className="logo">📦 InstaPacket</span>
      <button onClick={toggleLanguage}>{label}</button>
    </nav>
  );
}
