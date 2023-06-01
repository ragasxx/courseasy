import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/UserReducer';

export const server = 'https://courseasy.vercel.app/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
