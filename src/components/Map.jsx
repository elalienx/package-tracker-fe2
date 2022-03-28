// NPM Packages
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";

export default function Map({ latitude, longitude }) {
  // Properties
  const coordinates = [latitude, longitude];
  const zoomLevel = 10;
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <LeafletMap className="map" center={coordinates} zoom={zoomLevel}>
      <TileLayer url={mapURL} attribution={attribution} />
      <Marker position={coordinates} />
    </LeafletMap>
  );
}
