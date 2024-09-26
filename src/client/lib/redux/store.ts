// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import editorReducer from './slice/editor-slice';

const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
});

export default store;
