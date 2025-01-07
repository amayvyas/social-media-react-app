import "./post.scss";
import UserPost from "../userPost/UserPost";

const Post = () => {
  // Temporary data
  const posts = [
    {
      id: 1,
      name: "Meera Robertson",
      userId: 1,
      profilePic: "https://photosqn.com/wp-content/uploads/real-girl-pic_93.webp",
      desc: "lorem ipsum doler sit amet",
      img: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Anamika Ray",
      userId: 1,
      profilePic: "https://photosqn.com/wp-content/uploads/2024/04/real-girl-pic-photo-images1.webp",
      desc: "lorem ipsum doler sit amet",
      img: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Anjali Jain",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1253364/pexels-photo-1253364.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "lorem ipsum doler sit amet",
      img: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Aarushi Hunda",
      userId: 1,
      profilePic: "https://photosqn.com/wp-content/uploads/2024/04/real-girl-pic-photo-images1.webp",
      desc: "lorem ipsum doler sit amet",
      img: "https://images.pexels.com/photos/1685111/pexels-photo-1685111.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="post">
      {posts.map((post) => (
        <UserPost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Post;
