import { MenuType } from '@/lib/enums';
import { AppState } from '@/lib/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState : AppState = {
  editable: false,
  activeMenu: MenuType.NOTES,
  loading: false,
  darkTheme: false,
  menu: undefined
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setEditableEditor: (state, action) => {
      state.editable = action.payload;
    },
    setActiveMenu: (state, action: PayloadAction<MenuType>) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { setEditableEditor, setActiveMenu } = appSlice.actions;
export default appSlice.reducer;
