import { MenuType, NoteStatus, NotesSortKey } from "../enums"
import { v4 } from "uuid";

export interface NoteItem {
  id: string
  text: string
  created: string
  lastUpdated: string
  category?: string
  isTags?: string | string[]
  isPinned?: boolean
  isTrash: boolean
  isArchived: boolean
  status: NoteStatus
}

export interface CategoryItem {
  id: string
  name: string
}

export interface TagItem {
  id: string
  name: string
}

export interface Visitor {
  id: typeof v4
  name: string
  avatar?: string
  isOnline: boolean
}

export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>

// =================================================================================================
// STATE
// =================================================================================================

export interface NoteState {
  notes: NoteItem[]
  activeNoteId: string
  selectedNotesIds: string[]
  activeTagsId: string
  error: null | string | undefined
  loading: boolean
  searchValue: string
  status?: 'succeeded' | 'loading' | 'failed'
}

export interface SettingsState {
  isOpen: boolean
  loading: boolean
  darkTheme: boolean
  notesSortKey: NotesSortKey
}

export interface AppState {
  menu: any;
  editable: boolean
  activeMenu: MenuType
  loading: boolean
  darkTheme: boolean
}

export interface RootState {
  appState: AppState;
  noteState: NoteState;
  settingsState: SettingsState;
}

export const SET_ACTIVE_MENU = 'SET_ACTIVE_MENU';

interface SetActiveMenuAction {
  type: typeof SET_ACTIVE_MENU;
  payload: MenuType;
}

export type MenuActionTypes = SetActiveMenuAction;


export interface MenuState {
  activeMenu: MenuType;
}
