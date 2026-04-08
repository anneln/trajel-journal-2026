import globe from "../src/assets/globe.png";

export default function Header() {
  return (
    <header>
      <div>
        <img className="logo" src={globe} alt="globe-icon" />
        <h1>my travel journal</h1>
      </div>
    </header>
  );
}
