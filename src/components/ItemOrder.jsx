// NPM packages
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Project files
import IconStatus from "./IconStatus";

export default function ItemOrder({ item }) {
  return (
    <Link className="item-order" to={`order/${item.id}`}>
      <div className="details sub-container">
        <h2 className="title">{item.sender}</h2>
        <span className="id">Parcel #{item.parcel_id}</span>
      </div>

      <div className="spacer">{/* empty on purpose */}</div>

      <div className="status sub-container">
        <IconStatus status={item.status} />
      </div>

      <div className="arrow sub-container">
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </Link>
  );
}
