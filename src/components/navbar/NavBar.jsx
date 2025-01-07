import "./navBar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext"; // Ensure correct path
import { AuthContext } from "../../context/authenticationContext";

const NavBar = () => {
  // Get context values with default destructuring
  const { darkMode, toggle } = useContext(DarkModeContext) || {};  // Fixed destructuring for darkMode and toggle
  const { currentUser } = useContext(AuthContext) || {};

  // Return a basic navbar even if contexts aren't fully loaded
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>AAVS</span>
        </Link>
        <HomeOutlinedIcon/>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        {currentUser && (
          <div className="user">
            <img 
              src={currentUser.profilePic} 
              alt={currentUser.name}
              onError={(e) => {
                e.target.src = '/default-avatar.png'; // Provide a default image
              }}
            />
            <span>{currentUser.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
