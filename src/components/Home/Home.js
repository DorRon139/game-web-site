import React from "react";
import GamesCard from "./GamesCard";
import "./Home.css";
import gameDate from "./gameData.js";

const Home = ({ setGame }) => {
  const gamesList = gameDate.map((game) => {
    return (
      <GamesCard
        key={game.id}
        id={game.id}
        title={game.title}
        imgName={`./images/GamesImages/${game.imgName}`}
        description={game.description}
        setGame={setGame}
      />
    );
  });
  return (
    <div className="home--gallery">
      <h1>Games:</h1>
      <section className="home--section">{gamesList}</section>
    </div>
  );
};

export default Home;
