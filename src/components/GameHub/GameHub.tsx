import { GamesCard } from "../GamesCard/GamesCard";
import "./GamesHub.less";

export function GameHub() {
  return (
    <div id="Container_gameHub">
      <header className="gameHub_header">
        <h1>Jogos</h1>
      </header>
      <div className="gamehub_games">
        <GamesCard />
      </div>
    </div>
  );
}
