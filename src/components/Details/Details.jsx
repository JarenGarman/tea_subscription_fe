import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSubscription } from "../../apiCalls";
import CustomerSubscriptions from "../CustomerSubscriptions/CustomerSubscriptions";
import DetailedSubscription from "../DetailedSubscription/DetailedSubscription";
import Teas from "../Teas/Teas";
import "./Details.css";

function Details() {
  const [sub, setSub] = useState(null);
  const params = useParams();

  useEffect(() => {
    getSubscription(params.id).then((subscription) => setSub(subscription));
  }, [params.id]);

  if (!sub) {
    return <h2>Loading...</h2>;
  }

  return (
    <article className="subscription-details">
      <DetailedSubscription
        title={sub.data.attributes.title}
        price={sub.data.attributes.price}
        image_url={sub.data.attributes.image_url}
      />
      <Teas teas={sub.included} />
      <CustomerSubscriptions subs={sub.data.attributes.customer_subscriptions.data} />
    </article>
  );
}

export default Details;
