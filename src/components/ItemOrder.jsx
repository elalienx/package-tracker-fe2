// NPM packages
import { Link } from "react-router-dom";

export default function ItemOrder({ item }) {
  return (
    <Link className="item-order" to={`order/${item.id}`}>
      <h2>{item.sender}</h2>
      <span>Parcel #{item.parcelId}</span>
      <span>{item.status}</span>
    </Link>
  );
}
