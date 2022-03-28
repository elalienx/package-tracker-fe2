// NPM packages
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Orders({ orders }) {
  const { t, i18n } = useTranslation();

  // Component
  const OrderItems = orders.map((item) => (
    <Link to={`order/${item.id}`} key={item.id}>
      <h3>{item.sender}</h3>
      <span>Parcer #{item.parcelId}</span>
      <span>{item.status}</span>
    </Link>
  ));

  return (
    <div id="orders">
      <h1>{t("orders:title")}</h1>
      <h2>Here are your orders</h2>
      <div className="grid">{OrderItems}</div>
    </div>
  );
}
