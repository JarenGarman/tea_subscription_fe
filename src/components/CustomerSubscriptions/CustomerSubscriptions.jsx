import CustomerSubscription from "../CustomerSubscription/CustomerSubscription";
import "./CustomerSubscriptions.css";

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
    <section className="customer-subs" data-cy="customer-subs">
      <h2>Customers</h2>
      <div>{subComponents}</div>
    </section>
  );
}

export default CustomerSubscriptions;
