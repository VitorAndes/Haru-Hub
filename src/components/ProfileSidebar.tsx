import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "./ui/sidebar";

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

// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ];

export function ProfileSidebar() {
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
    <Sidebar className="bg-[rgba(20,0,36,0.25)] shadow-[0_8px_13px_0_rgba(312,222,335,0.37)] backdrop-blur-[4px] rounded-[10px]">
      <SidebarContent>
        <SidebarGroup className="h-full">
          <SidebarGroupLabel className="text-xl text-violet-500">
            Haru Hub
          </SidebarGroupLabel>
          <SidebarHeader>
            <img src="" alt="" />
          </SidebarHeader>
          <SidebarGroupContent className="h-full">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                {player ? (
                  <div className="profile_avatar">
                    <img
                      className="w-full rounded-xl shadow-sm shadow-violet-600"
                      src={player.avatarfull}
                      alt={`${player.personaname}'s avatar`}
                    />
                  </div>
                ) : (
                  <p>No player data available</p>
                )}

                {player ? (
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <a
                        href={player.profileurl}
                        className="text-sm hover:text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h1 className="text-xl">{player.personaname}</h1>
                      </a>
                      <span className="text-sm text-red-500 ">
                        {getPlayerStatus(player.personastate)}
                      </span>
                    </div>
                    <p className="text-base text-slate-400">Gamer proffisa</p>
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

              <div className="flex flex-col gap-3">
                <h2 className="text-lg">Friends</h2>
                {friends ? (
                  friends.map((friend) => {
                    return (
                      <div className="flex  gap-3" key={friend.steamid}>
                        <span className="text-sm text-slate-400">
                          {friend.friend_since}
                        </span>
                        <span className="text-sm text-slate-400">
                          {friend.relationship}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <p>No friend data</p>
                )}
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
