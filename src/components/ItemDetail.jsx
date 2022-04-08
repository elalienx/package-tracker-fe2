export default function ItemDetail({ label, text, icon }) {
  // Safeguard
  if (text === null) return null;
  if (text === false) return null;
  if (text === true) text = "Yes";

  return (
    <div className="item-detail">
      {/* Font awesome goes here */}
      <span className="label">{label}:</span>
      <p>{text}</p>
    </div>
  );
}
