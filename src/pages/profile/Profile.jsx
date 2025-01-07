import "./profile.scss"
import { FacebookTwoTone, 
  LinkedIn, 
  Instagram, 
  Pinterest,
  Twitter,
  Place,
  Language,
  EmailOutlined,
  MoreVert  } from "@mui/icons-material"

  import Post from "../../components/posts/Post"

  import profileBackground from "../../../public/profileBackground.jpg"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src={profileBackground} alt="" className="cover" />
        <img src="https://photosqn.com/wp-content/uploads/real-girl-pic_93.webp" alt="" className="profile" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">

          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookTwoTone fontSize="large"/>
            </a>

            <a href="https://www.instagram.com/?hl=en">
              <Instagram fontSize="large"/>
            </a>

            <a href="https://x.com/?lang=en&mx=2">
              <Twitter fontSize="large"/>
            </a>

            <a href="https://www.linkedin.com/">
              <LinkedIn fontSize="large"/>
            </a>

            <a href="https://www.pinterest.com/">
              <Pinterest fontSize="large"/>
            </a>

          </div>

          <div className="center">
            <span>Meera Jain</span>
            <div className="info">

              <div className="item">
                <Place/>
                <span>USA</span>
              </div>

              <div className="item">
                <Language/>
                <span>AAVS</span>
              </div>
            </div>
            <button>Follow</button>
          </div>

          <div className="right">
            <EmailOutlined/>
            <MoreVert/>
          </div>
        </div>
        <Post/>
      </div>
    </div>
  )
}

export default Profile