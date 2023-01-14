import {configureStore} from '@reduxjs/toolkit';
import locationDataSlice from './slices/locationDataSlice';

export const store = configureStore({
  reducer: {
    locationData: locationDataSlice
  }
});