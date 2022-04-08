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
  if (order === undefined) return <p>The order {id} is not longer available</p>;

  const eta = <Moment date={order.eta} format="MMM Do YYYY" />;
  const lastUpdate = <Moment date={order.last_updated} format="MMM Do YYYY" />;
  const sign = order.verification_required;

  return (
    <div id="details" className="container">
      <h1>{t("details:title", { sender: order.sender })}</h1>
      <p>{t("details:description")}</p>

      <section className="content">
        <Map
          latitude={order.location_coordinate_latitude}
          longiture={order.location_coordinate_longitude}
        />
        <div className="information">
          <ItemDetail
            label="Location"
            text={order.location_name}
            icon="map-pin"
          />
          <ItemDetail label="Estimated delivery time" text={eta} icon="truck" />
          <ItemDetail label="Last update" text={lastUpdate} icon="stopwatch" />
          <ItemDetail label="Notes" text={order.notes} icon="note-sticky" />
          <ItemDetail label="Signature needed" text={sign} icon="info-circle" />
        </div>
      </section>
      <footer>
        <Link className="button" to="/">
          Go back
        </Link>
      </footer>
    </div>
  );
}
