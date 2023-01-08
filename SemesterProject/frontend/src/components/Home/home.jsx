// import { Typography } from '@mui/material'
import React, { useEffect } from "react";
import "./home.css";
import User from "../User/User";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { postOfFollowingReducer } from "../../Reducers/userReducer";
import { getFollowingPost, getAllUsers } from "../../Actions/user";
import Loader from "../Loader/loader";
import { Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, post, error } = useSelector(
    (state) => state.postofFollwoing
  );

  const { user, loading: userloading } = useSelector((state) => state.allUser);
  useEffect(() => {
    dispatch(getFollowingPost());
    dispatch(getAllUsers());
  }, [dispatch]);

  return loading === true || userloading === true ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {post && post.length > 0 ? (
          post.map((post) => (
            <Post
              key={post._id}
              postImage={
                "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
              }
              ownerName={"abdullah khalid"}
              // postCaption={"this is a caption"}
              postId={post._id}
              // postImage = {post.image.url}
              postCaption={post.caption}
              postLikes={post.likes}
              postComments={post.comments}
              // ownerImage={post.user.avatar.url}
              // ownerName={post.user.name}
              // ownerId={post.user._id}
            />
          ))
        ) : (
          <Typography> No Post Found</Typography>
        )}
      </div>
      <div className="homeright">
        {/* <div className="user">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="userImage" />
              <Typography> abdullah khalid</Typography>
          </div> */}

        {user && user.length > 0 ? (
          user.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={
                "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
              }
            />
          ))
        ) : (
          <Typography> No User Found</Typography>
        )}

        {/* <User
          userId={"user._id"}
          name={"user.name"}
          avatar={
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
          }
        /> */}
      </div>
    </div>
  );
};

export default Home;
