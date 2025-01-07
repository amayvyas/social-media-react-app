import './userPost.scss';
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined,
  MoreHoriz,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Comment from '../comments/Comment';
import { useState } from 'react';

const UserPost = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)
  // Temporary state to indicate if the post is liked
  const liked = true;

  return (
    <div className="userPost">

      <div className="container">
        {/* User Information */}
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt={`${post.name}'s profile`} />

            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="name">{post.name}</span></Link>
              <span className="date">a minute ago</span>
            </div>


          </div>
          <MoreHoriz />
        </div>

        {/* Post Content */}
        <div className="content">
          <p>{post.desc}</p>
          {post.img && <img src={post.img} alt="Post content" />}
        </div>

        {/* Post Interaction */}
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined style={{ color: 'red' }} /> : <FavoriteBorderOutlined />}
            <span>12 likes</span>
          </div>
          <div className="item"onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlined />
            <span>12 comments</span>
          </div>
          <div className="item">
            <ShareOutlined />
            <span>Share</span>
          </div>
        </div>
        {commentOpen && <Comment/>}
      </div>
    </div>
  );
};

UserPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    profilePic: PropTypes.string.isRequired,
    desc: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default UserPost;
