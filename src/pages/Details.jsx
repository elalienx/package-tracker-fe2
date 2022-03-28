// NPM packages
import { useParams } from "react-router-dom";
import Moment from "react-moment";

// Project files
import Map from "../components/Map";

export default function Details({ orders }) {
  const { id } = useParams();

  // Properties
  const order = orders.filter((item) => item.id === Number(id))[0];

  // Safeguard
  if (order === undefined) return <p>The order {id} is not longer available</p>;

  return (
    <div id="order">
      <h1>Order details</h1>
      <Map
        latitude={order.location_coordinate_latitude}
        longitude={order.location_coordinate_longitude}
      />
      <span>Sender:</span>
      <span>{order.sender}</span>
      <hr />
      <span>Location:</span>
      <span>{order.location_name}</span>
      <hr />
      <span>Delivery date:</span>
      <span>
        <Moment date={order.eta} format="MMM Do YYYY" />
      </span>
    </div>
  );
}
