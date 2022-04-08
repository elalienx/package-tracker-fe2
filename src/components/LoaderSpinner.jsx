// NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoaderSpinner() {
  return (
    <div className="loader-spinner">
      <FontAwesomeIcon className="icon" icon="fa-spinner" spin />
      <p>Loading...</p>
    </div>
  );
}
