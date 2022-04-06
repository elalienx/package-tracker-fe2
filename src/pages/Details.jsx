// NPM packages
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";

// Project files
import ItemDetail from "../components/ItemDetail";
import Map from "../components/Map";

export default function Details({ orders }) {
  const { id } = useParams();
  const { t } = useTranslation();

  // Properties
  const order = orders.filter((item) => item.id === Number(id))[0];

  // Safeguard
  if (order === undefined) return <p>The order {id} is not longer available</p>;

  return (
    <div id="details">
      <h1>{t("details:title")}</h1>
      <p>{t("details:description")}</p>
      <Map
        latitude={order.location_coordinate_latitude}
        longiture={order.location_coordinate_longitude}
      />
      <ItemDetail label="Sender">{order.sender}</ItemDetail>
      <ItemDetail label="Location">{order.location_name}</ItemDetail>
      <ItemDetail label="Delivery date">
        <Moment date={order.eta} format="MMM Do YYYY" />
      </ItemDetail>
      <Link to="/">Go back</Link>
    </div>
  );
}
