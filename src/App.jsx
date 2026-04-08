import Header from "../components/Header";
import Entry from "../components/Entry";
import data from "./data";

export default function App() {
  const travelElements = data.map((travel) => {
    return <Entry key={travel.id} {...travel} />;
  });
  return (
    <>
      <Header />
      {travelElements}
    </>
  );
}
