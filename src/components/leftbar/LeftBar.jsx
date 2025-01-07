import { useContext } from "react";
import { AuthContext } from "../../context/authenticationContext"; // Use AuthContext directly
import "./leftBar.scss";
import Courses from "../../assets/Courses.png";
import Friend from "../../assets/friend.png";
import Group from "../../assets/Groups.png";
import Market from "../../assets/Marketplace.png";
import Watch from "../../assets/Watch.png";
import Memories from "../../assets/Memories.png";
import Events from "../../assets/Events.png";
import Gaming from "../../assets/Gaming.png";
import Gallery from "../../assets/Gallery.png";
import Videos from "../../assets/Videos.png";
import Messages from "../../assets/Messages.png";
import Tutorials from "../../assets/Tutorials.png";
import Fund from "../../assets/FundRaise.png";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext); // Access currentUser directly from AuthContext

  // Debugging the currentUser value
  console.log("Current User: ", currentUser); // Check the value of currentUser

  // Ensure currentUser exists before rendering
  if (!currentUser) {
    return <div>Loading...</div>; // You can also show a spinner or placeholder
  }

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="Profile" />
            <span>{currentUser.name}</span>
          </div>

          <div className="item">
            <img src={Friend} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={Group} alt="" />
            <span>Groups</span>
          </div>

          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>

          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>

          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>

          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>

          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>

          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>

          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
