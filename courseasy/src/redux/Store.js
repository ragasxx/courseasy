import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/UserReducer';

export const server = 'https://courseasy.vercel.app/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile:profileReducer
  },
});

export default store;
