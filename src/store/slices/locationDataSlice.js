// https://www.bezkoder.com/react-redux-login-example-toolkit-hooks/
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isFetching: false,
  error: false,
};

export const locationDataSlice = createSlice({
  name: 'locationData',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    fetchingData: (state) => {
      state.token = "feting"
      state.isFetching = true
    }
  },
});

export const {setToken,fetchingData} = locationDataSlice.actions;

export const selectUser = state => state.user;

export default locationDataSlice.reducer;
