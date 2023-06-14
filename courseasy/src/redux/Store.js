import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, subscriptionReducer, userReducer } from './reducers/UserReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';

export const server = 'https://courseasy-ragasxx.vercel.app/api/v1';
// export const server = "http://localhost:4000/api/v1/";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile:profileReducer,
    courses:courseReducer,
    subscription:subscriptionReducer,
    admin:adminReducer
  },
});

export default store;
