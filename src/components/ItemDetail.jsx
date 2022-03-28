export default function ItemDetail({ label, children }) {
  return (
    <div className="item-detail">
      <span className="label">{label}:</span>
      <br />
      {/* Note: We use children instead of a string, so we can pass the <Moment/> date component as well */}
      {children}
    </div>
  );
}
