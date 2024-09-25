import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editable: false,
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditable: (state, action) => {
      state.editable = action.payload;
    },
  },
});

export const { setEditable } = editorSlice.actions;
export default editorSlice.reducer;
