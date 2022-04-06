// NPM packages
import { Link } from "react-router-dom";

export default function ItemOrder({ item }) {
  return (
    <Link className="blue-container" to={`order/${item.id}`}>
      {/* Packet name */}
      <div className="green-container">
        <h2>{item.sender}</h2>
        <span>Parcel #{item.parcelId}</span>
      </div>

      {/* Status */}
      <div className="green-container">
        <span>📦</span>
        <span>{item.status}</span>
      </div>

      {/* Go arrow */}
      <div className="green-container">
        <span>➡️</span>
      </div>
    </Link>
  );
}
