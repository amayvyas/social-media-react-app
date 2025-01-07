import { useContext } from "react";
import { AuthContext } from "../../context/authenticationContext";
import "./home.scss"
import Stories from "../../components/stories/Stories";
import Post from "../../components/posts/Post"

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser); // Check if currentUser is defined here
  return (
    <div className="home">
      <Stories/>
      <Post/>
    </div>
  );
};
export default Home