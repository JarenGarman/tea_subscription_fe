import Tea from "../Tea/Tea";
import "./Teas.css";

function Teas({ teas }) {
  const teaComponents = teas.map((tea) => {
    return (
      <Tea
        key={tea.id}
        title={tea.attributes.title}
        description={tea.attributes.description}
        brew_time={tea.attributes.brew_time}
        image_url={tea.attributes.image_url}
      />
    );
  });

  return (
    <section className="teas-section">
      <h2>Teas Included</h2>
      <div>{teaComponents}</div>
    </section>
  );
}

export default Teas;
