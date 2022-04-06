// NPM packages
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-regular-svg-icons";

export default function ItemOrder({ item }) {
  return (
    <Link className="item-order" to={`order/${item.id}`}>
      <div className="details sub-container">
        <h2 className="title">{item.sender}</h2>
        <span className="id">Parcel #{item.parcel_id}</span>
      </div>

      <div className="spacer">{/* empty on purpose */}</div>

      <div className="status sub-container">
        <div className="icon">📦</div>
        <span>{item.status}</span>
      </div>

      <span className="sub-container">
        <FontAwesomeIcon icon={faHandPeace} />
      </span>
    </Link>
  );
}
