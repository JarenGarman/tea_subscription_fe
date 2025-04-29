import "./DetailedSubscription.css";

function Subscription({ title, price, image_url }) {
  return (
    <section className="sub-section">
      <h2>Subscription Details</h2>
      <img
        src={image_url}
        alt={`${title} Image`}
        className="detailed-sub-image"
      />
      <h3 className="detailed-sub-title">{title}</h3>
      <p className="detailed-sub-price">${price}</p>
    </section>
  );
}

export default Subscription;
