import "./GamesCard.less";
interface Games {
  game_img: string;
  game_title: string;
}

const games: Games[] = [
  {
    game_img:
      "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg",
    game_title: "Minecraft",
  },
  {
    game_img:
      "https://assetsio.gnwcdn.com/co49wj.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    game_title: "LOL",
  },
  {
    game_img:
      "https://www.adrenaline.com.br/wp-content/uploads/2023/05/valorant-cover.jpg",
    game_title: "Valorant",
  },
  {
    game_img:
      "https://cdn2.steamgriddb.com/grid/d18c832e8c956b4ef8b92862e6bf470d.png",
    game_title: "Hollow knight",
  },
  {
    game_img: "https://sm.ign.com/ign_br/cover/c/celeste/celeste_y4wf.jpg",
    game_title: "Celeste",
  },
  {
    game_img:
      "https://upload.wikimedia.org/wikipedia/pt/1/1b/Little_Nightmares_capa_do_jogo.jpg",
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
