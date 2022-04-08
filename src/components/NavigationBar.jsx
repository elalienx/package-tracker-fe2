// NPM packages
import { Link } from "react-router-dom";

// Project files
import Logo from "../assets/images/logo-white.svg";
import ButtonTrasnlate from "./ButtonTranslate";

export default function NavigationBar() {
  return (
    <nav id="navigation-bar">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="The company name written with white letters" />
        </Link>
        <ButtonTrasnlate />
      </div>
    </nav>
  );
}
