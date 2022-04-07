// NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckRampBox,
  faTruckFast,
  faTruckPickup,
  faCheck,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function IconStatus({ status }) {
  // Methods
  function getStatus(status) {
    let icon;
    let label;

    switch (status) {
      case "order-info-received":
        icon = faTruckRampBox;
        label = "Order received";
        break;
      case "on-the-way":
        icon = faTruckFast;
        label = "On the way";
        break;
      case "ready-for-pickup":
        icon = faTruckPickup;
        label = "Ready for pickup";
        break;
      case "delivered":
        icon = faCheck;
        label = "Delivered";
        break;
      default:
        icon = faInfoCircle;
        label = "Unknow status";
    }

    return { icon: icon, label: label };
  }

  return (
    <>
      <div className="icon">
        <FontAwesomeIcon icon={getStatus(status).icon} />
      </div>
      <span>{getStatus(status).label}</span>
    </>
  );
}
