import { useEffect, useState } from "react";
import { getSubscriptions } from "../../apiCalls";
import Subscription from "../Subscription/Subscription";
import "./Home.css";

function Home({ sort }) {
  const [subscriptions, setSubscriptions] = useState([]);
  let subComponents;

  useEffect(() => {
    const sortOptions = {
      Default: null,
      "Price: High to Low": "desc",
      "Price: Low to High": "asc",
    };
    getSubscriptions(sortOptions[sort]).then((subscriptions) =>
      setSubscriptions(subscriptions.data)
    );
  }, [sort]);

  subComponents = subscriptions.map((sub) => {
    return (
      <Subscription
        key={sub.id}
        id={sub.id}
        title={sub.attributes.title}
        price={sub.attributes.price}
        image_url={sub.attributes.image_url}
      />
    );
  });

  if (subscriptions.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <section
      className="subscriptions-container"
      data-cy="subscriptions-container"
    >
      {subComponents}
    </section>
  );
}

export default Home;
