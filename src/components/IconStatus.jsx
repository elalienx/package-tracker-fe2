// NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project file
import OrderStatus from "../data/order-status.json";

export default function IconStatus({ status }) {
  // Safeguard
  if (OrderStatus[status] == undefined) return null;

  return (
    <>
      <div className="icon">
        <FontAwesomeIcon icon={OrderStatus[status].icon} />
      </div>
      <span>{OrderStatus[status].label}</span>
    </>
  );
}
