// NPM packages
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Project files
import NavigationBar from "../components/NavigationBar";
import Orders from "../pages/Orders";
import Details from "../pages/Details";

export default function LoadedRoutes({ orders }) {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Orders orders={orders} />} />
        <Route path="order/:id" element={<Details orders={orders} />} />
      </Routes>
    </BrowserRouter>
  );
}
