import { AppState } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState : AppState = {
  editable: false,
  isOpen: true,
  loading: false,
  darkTheme: false,
};

const appSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditableEditor: (state, action) => {
      state.editable = action.payload;
    },
  },
});

export const { setEditableEditor } = appSlice.actions;
export default appSlice.reducer;
