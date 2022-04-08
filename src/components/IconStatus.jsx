// NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project file
import OrderStatus from "../data/order-status.json";

export default function IconStatus({ status }) {
  // Properties
  const icon = OrderStatus[status].icon || "fa-info-circle";
  const label = OrderStatus[status].label || "unknow label";

  return (
    <>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span>{label}</span>
    </>
  );
}
