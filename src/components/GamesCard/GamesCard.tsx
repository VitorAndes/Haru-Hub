import { useEffect, useState } from "react";
import "./GamesCard.less";
interface Games {
  steam_appid: number;
  name: string;
  header_image: string;
  genres: { id: string; description: string }[];
}

interface ApiResponseGames {
  [steam_appid: number]: {
    success: boolean;
    data: Games;
  };
}

export function GamesCard() {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesResponse = await fetch("http://localhost:3333/games");

        if (!gamesResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const gamesDetails: ApiResponseGames = await gamesResponse.json();
        const gamesList = Object.values(gamesDetails).map((item) => item.data);

        setGames(gamesList);
      } catch (error) {
        console.error(error instanceof Error ? error.message : "Unknown error");
      }
    };

    fetchData();
  }, []);

  return (
    <div id="games_container">
      {games.map(({ steam_appid, header_image, name, genres }) => {
        return (
          <div className="game_card" key={steam_appid}>
            <img className="game__img" src={header_image} alt="game__img" />
            <div className="card-label__container">
              <div className="card-label__content">
                <p className="card_label__name">{name}</p>
              </div>
              <div className="card-label__genres">
                {genres.map((genre) => (
                  <span key={genre.id}>{genre.description}, </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
