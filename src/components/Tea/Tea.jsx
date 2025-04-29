import "./Tea.css";

function Tea({ title, description, brew_time, image_url }) {
  return (
    <article className="tea-article">
      <img src={image_url} alt={`${title} Image`} className="tea-image" />
      <h3 className="tea-title">{title}</h3>
      <h4 className="tea-brew-time">Brew Time: {brew_time} minutes</h4>
      <p className="tea-description">{description}</p>
    </article>
  );
}

export default Tea;
