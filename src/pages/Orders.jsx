// NPM packages
import { useTranslation } from "react-i18next";
import ItemOrder from "../components/ItemOrder";

export default function Orders({ orders }) {
  const { t } = useTranslation();

  // Component
  const Orders = orders.map((item) => <ItemOrder key={item.id} item={item} />);

  // Properties
  const name = orders[0].user_name;

  return (
    <div id="orders">
      <h1>{t("orders:title", { name: name })}</h1>
      <p>{t("orders:description")}</p>
      <div className="grid">{Orders}</div>
    </div>
  );
}
