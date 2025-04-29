import { Link } from "react-router";
import "./Subscription.css";

function Subscription({ id, title, price, image_url }) {
  return (
    <Link to={`/subscriptions/${id}`}>
      <article className="sub-article">
        <img src={image_url} alt={`${title} Image`} className="sub-image" />
        <h2 className="sub-title">{title}</h2>
        <p className="sub-price">${price}</p>
      </article>
    </Link>
  );
}

export default Subscription;
