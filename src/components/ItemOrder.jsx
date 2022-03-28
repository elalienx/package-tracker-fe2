// NPM packages
import { Link } from "react-router-dom";

export default function ItemOrder({ item }) {
  return (
    <Link className="item-order" to={`order/${item.id}`}>
      <h3>{item.sender}</h3>
      <span>Parcel #{item.parcelId}</span>
      <span>{item.status}</span>
    </Link>
  );
}
