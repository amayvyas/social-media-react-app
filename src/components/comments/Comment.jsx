import  { useContext } from "react";
import { AuthContext } from "../../context/authenticationContext";
import "./comment.scss";

const Comment = () => {
  const { currentUser } = useContext(AuthContext);

  // Temporary comments
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum sit doler amit, lorem ipsum doler amit, lorem ipsum doler sit amit",
      name: "Leela Jain",
      userId: 1,
      profilePic: "https://photosqn.com/wp-content/uploads/real-girl-pic_93.webp",
    },
    {
      id: 2,
      desc: "Lorem ipsum sit doler amit, lorem ipsum doler amit, lorem ipsum doler sit amit",
      name: "Suchita Bose",
      userId: 1,
      profilePic: "https://photosqn.com/wp-content/uploads/real-girl-pic_93.webp",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        {currentUser ? (
          <>
            <img src={currentUser.profilePic} alt="Current user" />
            <input type="text" placeholder="Write a comment..." />
            <button>Send</button>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt={`${comment.name}'s profile`} />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comment;
