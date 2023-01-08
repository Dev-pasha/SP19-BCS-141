import { createReducer } from "@reduxjs/toolkit";
// import {createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  // Add reducers here
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});

export const loadUser = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});

export const postOfFollowingReducer = createReducer(initialState, {
  postofthefollowingRequest: (state) => {
    state.loading = true;
  },
  postofthefollowingSuccess: (state, action) => {
    state.loading = false;
    state.post = action.payload;
  },
  postofthefollowingFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearPost: (state) => {
    state.error = null;
  },
});



export const allUserReducer = createReducer(initialState, {
  allUserRequest: (state) => {
    state.loading = true;
  },
  allUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  allUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearPost: (state) => {
    state.error = null;
  },
});
