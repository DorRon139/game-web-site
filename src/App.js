import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game.js";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [game, setGame] = useState(null);

  return (
    <div className="App">
      <Navbar onSelectGame={setGame} />
      <Game game={game} />
      <Footer />
    </div>
  );
}

export default App;
