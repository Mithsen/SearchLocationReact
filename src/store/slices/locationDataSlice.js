// https://www.bezkoder.com/react-redux-login-example-toolkit-hooks/
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  locationData: null,
};

export const locationDataSlice = createSlice({
  name: 'locationData',
  initialState,
  reducers: {
    setLocationData: (state, action) => {
      state.locationData = action.payload
    },
  },
});

export const {setLocationData} = locationDataSlice.actions;

export default locationDataSlice.reducer;
