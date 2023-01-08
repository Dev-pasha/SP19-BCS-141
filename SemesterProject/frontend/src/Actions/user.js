// import { Http } from "@mui/icons-material";
import axios from "axios";
// import axiosInstance from "../services/axiosInstance";
// import { useDispatch } from "react-redux";



export const loginUser =  ( email, password ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "LoginRequest",
      });

    const value = await axios.post(
        "/api/v1/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "LoginSuccess",
        payload: value.user,
      });

    } catch (error) {
      dispatch({
        type: "LoginFailure",
      });
    }
  };


// load user from axios request
export const LoadUser = () => async (dispatch) => {
  try {

    dispatch({
      type: "LoadUserRequest",
    });

    const {data}  = await axios.get("/api/v1/me");
    console.log(data)


    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });

  } catch (error) {

    // console.log(error);
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,

    });
  }
};



export const getFollowingPost = () => async (dispatch) => {
  try {

    dispatch({
      type: "postofthefollowingRequest",
    });

  const {data} = await axios.get("/api/v1/posts")

    dispatch({
      type: "postofthefollowingSuccess",
      payload: data.post,
    });
    
  } catch (error) {

    dispatch({
      type: "postofthefollowingFailure",
      payload: error.response.data.message,
    });
   
  }
};



export const getAllUsers = () => async (dispatch) => {
  try {

    dispatch({
      type: "allUserRequest",
    });

  const {data} = await axios.get("/api/v1/users")

    dispatch({
      type: "allUserSuccess",
      payload: data.user,
    });
    
  } catch (error) {

    dispatch({
      type: "allUserFailure",
      payload: error.response.data.message,
    });
   
  }
};
