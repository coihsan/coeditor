import { RootState } from "@/lib/types";

export const getNotes = (state: RootState) => state.noteState
export const getSettings = (state: RootState) => state.settingsState
export const getAppState = (state: RootState) => state.appState