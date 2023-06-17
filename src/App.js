import Card from "./components/Card.js";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Sneakers</h1>
          <div className="search-bar d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Zoek sneaker naar keuze..."></input>
          </div>
        </div>

        {/* ------------- CARDS BEGIN HERE -------------- */}
        <div className="sneaker-cards">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
