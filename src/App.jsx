// NPM Packages
import { useEffect, useState } from "react";

// Project files
import LoadedRoutes from "./components/LoadedRoutes";
import LoaderSpinner from "./components/LoaderSpinner";
import backupData from "./data/backup-data.json";
import "./styles/style.sass";

export default function App() {
  // Local state
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Properties
  const debug = false;
  const endpoint = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  // Method
  useEffect(() => onLoad(), []);

  async function onLoad() {
    try {
      const request = await fetch(endpoint);
      const json = await request.json();

      setOrders(json);
      setStatus(1);
    } catch (error) {
      if (debug) {
        setOrders(backupData);
        setStatus(1);
      } else {
        setStatus(2);
      }
    }
  }

  return (
    <div className="App">
      {status === 0 && <LoaderSpinner />}
      {status === 1 && <LoadedRoutes orders={orders} />}
      {status === 2 && <p>Error!</p>}
    </div>
  );
}
