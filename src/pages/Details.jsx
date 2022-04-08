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
  const eta = <Moment date={order.eta} format="MMM Do YYYY" />;
  const lastUpdate = <Moment date={order.last_updated} format="MMM Do YYYY" />;
  const sign = order.verification_required;

  // Safeguard
  if (order === undefined) return <p>The order {id} is not longer available</p>;

  return (
    <div id="details" className="container">
      <h1>{t("details:title", { sender: order.sender })}</h1>
      <p>{t("details:description")}</p>

      <section className="content">
        <Map
          latitude={order.location_coordinate_latitude}
          longiture={order.location_coordinate_longitude}
        />
        <ItemDetail label="Location" text={order.location_name} icon="pin" />
        <ItemDetail label="Estimated delivery time" text={eta} icon="truck" />
        <ItemDetail label="Last update" text={lastUpdate} icon="stopwatch" />
        <ItemDetail label="Notes" text={order.notes} icon="sticky" />
        <ItemDetail label="Signature required" text={sign} icon="info-circle" />
      </section>
      <Link to="/">Go back</Link>
    </div>
  );
}
