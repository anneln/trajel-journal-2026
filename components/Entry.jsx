export default function Entry(props) {
  return (
    <article>
      <div className="container">
        <div className="img-container">
          <img className="main-image" src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="travel-infos">
          <div className="location-infos">
            <img src="../src/assets/marker.png" className="marker" />
            <p className="location">{props.country}</p>
            <a
              className="location-link"
              href="https://maps.app.goo.gl/YxzD76dWkM2kPvLo6"
              target="_blank"
              rel="noopener"
            >
              View on Google Maps
            </a>
          </div>
          <h3 className="travel-title">{props.title}</h3>
          <p className="date">{props.dates}</p>
          <p className="description">{props.text}</p>
        </div>
      </div>
    </article>
  );
}
