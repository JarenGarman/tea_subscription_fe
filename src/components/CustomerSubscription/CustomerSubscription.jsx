import { useState } from "react";
import { updateSubStatus } from "../../apiCalls";
import "./CustomerSubscription.css";

function CustomerSubscription({ id, initialStatus, customer }) {
  const [status, setStatus] = useState(initialStatus);

  function toggleStatus() {
    let activeParam;
    if (status === "active") {
      activeParam = "false";
    } else {
      activeParam = "true";
    }
    updateSubStatus(id, activeParam).then((data) =>
      setStatus(data.data.attributes.status)
    );
  }

  function buttonText() {
    if (status === "active") {
      return "Deactivate";
    } else {
      return "Reactivate";
    }
  }

  return (
    <article className="customer-sub">
      <h3 className="customer-name">
        {customer.first_name + " " + customer.last_name}
      </h3>
      <h4 className="status">
        {String(status).charAt(0).toUpperCase() + String(status).slice(1)}
      </h4>
      <button className="toggle-status" onClick={() => toggleStatus()}>
        {buttonText()}
      </button>
      <h5 className="customer-email">{customer.email}</h5>
      <p className="customer-address">{customer.address}</p>
    </article>
  );
}

export default CustomerSubscription;
