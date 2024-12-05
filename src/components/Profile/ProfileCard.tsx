import { useEffect, useState } from "react";
import "./ProfileCard.less";

type player = {
  steamid: string;
  personaname: string;
  profileurl: string;
  avatarfull: string;
  personastate: number;
  lastlogoff: number;
  timecreated: number;
  loccountrycode: string;
};

type friends = {
  steamid: string;
  relationship: string;
  friend_since: number;
};

interface ApiResponse {
  response: {
    players: player[];
  };
}
interface ApiResponseFriends {
  friendslist: {
    friends: friends[];
  };
}

export function ProfileCard() {
  const [player, setPlayer] = useState<player>();
  const [friends, setFriends] = useState<friends[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, friendResponse] = await Promise.all([
          fetch("http://localhost:3333/user"),
          fetch("http://localhost:3333/friends"),
        ]);

        if (!userResponse.ok || !friendResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const userData: ApiResponse = await userResponse.json();
        const friendData: ApiResponseFriends = await friendResponse.json();

        setPlayer(userData.response.players[0]);
        setFriends(friendData.friendslist.friends);
      } catch (error) {
        console.error(error instanceof Error ? error.message : "Unknown error");
      }
    };
    fetchData();
  }, []);

  const getPlayerStatus = (personastate: number) => {
    switch (personastate) {
      case 0:
        return "Offline";
      case 1:
        return "Online";
      case 2:
        return "Busy";
      case 3:
        return "Away";
      case 4:
        return "Snooze";
      case 5:
        return "looking to trade";
      default:
        return "Unknown";
    }
  };

  return (
    <div id="Container_profile">
      <div className="profile">
        {player ? (
          <div className="profile_avatar">
            <img
              src={player.avatarfull}
              alt={`${player.personaname}'s avatar`}
            />
            <a
              href={player.profileurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        ) : (
          <p>No player data available</p>
        )}

        {player ? (
          <div className="profile_status">
            <h2>{player.personaname}</h2>
            <span>{getPlayerStatus(player.personastate)}</span>
            <p>Gamer proffisa</p>
          </div>
        ) : (
          <p>No player data available</p>
        )}
      </div>

      {/* <div className="container_achievements">
        <h2>Achievements</h2>
        <div className="achievements">
          <span>achievements</span>
          <span>achievements</span>
          <span>achievements</span>
        </div>
      </div> */}

      {/* <div className="container_insignia">
        <h2>insignia</h2>
        <div className="insignia">
          <span>insignia</span>
          <span>insignia</span>
          <span>insignia</span>
        </div>
      </div> */}

      {/* <div className="container_infos">
        <span>info</span>
        <span>info</span>
        <span>info</span>
      </div> */}

      <div className="container_friends">
        <h2>Friends</h2>
        {friends ? (
          friends.map((friend) => {
            return (
              <div className="friend" key={friend.steamid}>
                <span>{friend.friend_since}</span>
                <span>{friend.relationship}</span>
              </div>
            );
          })
        ) : (
          <p>No friend data</p>
        )}
      </div>
    </div>
  );
}
