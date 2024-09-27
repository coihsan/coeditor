// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slice/app';

const store = configureStore({
  reducer: {
    appState: appReducer,
  },
});

export default store;