import { useParams } from "react-router-dom";

export default function Details({ orders }) {
  const { id } = useParams();
  console.log("Details.jsx id", id);
  console.log("Details.jsx orders", orders);

  const order = orders.filter((item) => item.id === Number(id))[0];
  console.log("Details.jsx order", order);

  // Safeguard
  if (order === undefined) return <p>The order {id} is not longer available</p>;

  return (
    <div id="order">
      <h1>Order details</h1>
      <span>Sender:</span>
      <span>{order.sender}</span>
      <hr />
      <span>Location:</span>
      <span>{order.location_name}</span>
      <hr />
      <span>Delivery date:</span>
      <span>{order.eta}</span>
    </div>
  );
}
