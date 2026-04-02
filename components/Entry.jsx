import marker from "../src/assets/marker.png";

export default function Entry() {
  return (
    <section>
      <img src="" className="img-url" />
      <div className="travel-infos">
        <div className="location-infos">
          <img src={marker} className="marker" />
          <p className="location">JAPAN</p>
          <a
            className="location-link"
            href="https://maps.app.goo.gl/YxzD76dWkM2kPvLo6"
            target="_blank"
            rel="noopener"
          >
            View on Google Maps
          </a>
        </div>
        <h3 className="travel-title">Mount Fuji</h3>
        <p className="date">12 Jan, 2023 - 24 Jan, 2023</p>
        <p className="description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  );
}
