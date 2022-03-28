// NPM packages
import { useTranslation } from "react-i18next";
import ItemOrder from "../components/ItemOrder";

export default function Orders({ orders }) {
  const { t } = useTranslation();

  // Component
  const Orders = orders.map((item) => <ItemOrder key={item.id} item={item} />);

  return (
    <div id="orders">
      <h1>{t("orders:title")}</h1>
      <div className="grid">{Orders}</div>
    </div>
  );
}
