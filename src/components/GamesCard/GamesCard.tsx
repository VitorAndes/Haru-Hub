import "./GamesCard.less";
interface Games {
  game_img: string;
  game_title: string;
}

const games: Games[] = [
  {
    game_img: "",
    game_title: "Minecraft",
  },
  {
    game_img: "",
    game_title: "LOL",
  },
  {
    game_img: "",
    game_title: "Valorant",
  },
  {
    game_img: "",
    game_title: "Hollow knight",
  },
  {
    game_img: "",
    game_title: "Celeste",
  },
  {
    game_img: "",
    game_title: "Little nightmares",
  },
];

export function GamesCard() {
  return (
    <div id="games_container">
      {games.map(({ game_img, game_title }) => {
        return (
          <div className="game_card" key={game_title}>
            <img className="game__img" src={game_img} alt="game__img" />
            <div className="card-label__container">
              <div className="card-label__content">
                <p>{game_title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
