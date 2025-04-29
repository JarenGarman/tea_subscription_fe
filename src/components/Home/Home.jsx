import { useEffect, useState } from "react";
import { getSubscriptions } from "../../apiCalls";
import Subscription from "../Subscription/Subscription";
import "./Home.css";

function Home() {
  const [subscriptions, setSubscriptions] = useState([]);
  let subComponents

  useEffect(() => {
    getSubscriptions().then((subscriptions) =>
      setSubscriptions(subscriptions.data)
    );
  }, []);

  subComponents = subscriptions.map((sub) => {
    return (
      <Subscription
        key={sub.id}
        id={sub.id}
        title={sub.title}
        price={sub.price}
        image_url={sub.image_url}
      />
    );
  });

  if (subscriptions.length === 0) {
    return <h2>Loading...</h2>;
  }

  return <div className="subscriptions-container">{subComponents}</div>;
}

export default Home;
