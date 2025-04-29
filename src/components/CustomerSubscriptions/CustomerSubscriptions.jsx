import "./CustomerSubscriptions.css";
import CustomerSubscription from "../CustomerSubscription/CustomerSubscription";

function CustomerSubscriptions({ subs }) {
  const subComponents = subs.map((sub) => {
    return (
      <CustomerSubscription
        key={sub.id}
        id={sub.id}
        initialStatus={sub.attributes.status}
        customer={sub.attributes.customer.data.attributes}
      />
    );
  });

  return (
    <section className="customer-subs">
      <h2>Customers</h2>
      {subComponents}
    </section>
  );
}

export default CustomerSubscriptions;
