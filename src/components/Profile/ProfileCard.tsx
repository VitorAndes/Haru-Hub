import "./ProfileCard.less";

export function ProfileCard() {
  return (
    <div id="Container_profile">
      <div className="profile">
        <div className="profile_avatar">
          <img
            src="https://pt.quizur.com/_image?href=https://img.quizur.com/f/img637e1ff08f6e90.51513695.png?lastEdited=1669210099&w=600&h=600&f=webp"
            alt="avatar"
          />
          <h1>Haru Moon</h1>
        </div>
        <div className="profile_status">
          <span>Playing...</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            expedita ut quibusdam accusamus
          </p>
        </div>
      </div>
      <div className="container_achievements">
        <h2>Achievements</h2>
        <div className="achievements">
          <span>achievements</span>
          <span>achievements</span>
          <span>achievements</span>
        </div>
      </div>
      <div className="container_insignia">
        <h2>insignia</h2>
        <div className="insignia">
          <span>insignia</span>
          <span>insignia</span>
          <span>insignia</span>
        </div>
      </div>
      <div className="container_infos">
        <span>info</span>
        <span>info</span>
        <span>info</span>
      </div>

      <div className="container_friends">
        <h2>Friends</h2>
        <div className="friend">
          <span>friend_avatar</span>
          <span>friend_name</span>
        </div>

        <div className="friend">
          <span>friend_avatar</span>
          <span>friend_name</span>
        </div>
      </div>
    </div>
  );
}
