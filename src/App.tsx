import "./App.less";
import { GameHub } from "./components/GameHub/GameHub";
import { ProfileCard } from "./components/Profile/ProfileCard";

export function App() {
  return (
    <div id="body">
      <div id="container">
        <ProfileCard />
        <GameHub />
      </div>
    </div>
  );
}
