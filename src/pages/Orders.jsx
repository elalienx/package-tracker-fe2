export default function Orders({ orders }) {
  // Component
  const OrderItems = orders.map((item) => (
    <li key={item.id}>
      <h3>{item.sender}</h3>
      <span>Parcer #{item.parcelId}</span>
      <span>{item.status}</span>
    </li>
  ));

  return (
    <div id="orders">
      <h1>Welcome to Instapacked</h1>
      <h2>Here are your orders</h2>
      <ul>{OrderItems}</ul>
    </div>
  );
}
