import "./Teas.css";
import Tea from "../Tea/Tea"

function Teas({ teas }) {
  const teaComponents = teas.map((tea) => {
    return <Tea
      key={tea.id}
      title={tea.attributes.title}
      description={tea.attributes.description}
      brew_time={tea.attributes.brew_time}
      image_url={tea.attributes.image_url}
    />
  })

  return (
    <section className="teas-section">
      <h2>Subscription Teas</h2>
      {teaComponents}
    </section>
  );
}

export default Teas;
