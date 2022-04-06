// NPM packages
import { Link } from "react-router-dom";

export default function ItemOrder({ item }) {
  return (
    <Link className="item-order" to={`order/${item.id}`}>
      {/* Packet name */}
      <div className="details sub-container">
        <h2 className="title">{item.sender}</h2>
        <span className="id">Parcel #{item.parcel_id}</span>
      </div>

      <div className="spacer">{/* empty on purpose */}</div>

      {/* Status */}
      <div className="status sub-container">
        <div className="icon">📦</div>
        <span>{item.status}</span>
      </div>

      {/* Go arrow */}
      <div className="sub-container">
        <span>➡️</span>
      </div>
    </Link>
  );
}
