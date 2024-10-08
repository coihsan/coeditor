import { MenuType, NotesSortKey } from "../enums"
import { v4 } from "uuid";

export interface NoteItem {
  id: string
  title: string
  content: string
  created: string
  lastUpdated: string
  tags?: string | string[]
  isTrash: boolean
  isFavorite: boolean
}
export interface NoteListType {
  id: string
  title: string
  tags?: string | string[]
  isFavorite: boolean
}
export interface CategoryItem {
  id: string
  name: string
}

export interface TagItem {
  id: string
  name: string[]
}

export interface Visitor {
  id: typeof v4
  name: string
  avatar?: string
  isOnline: boolean
}

export type ReactMouseEvent =
  | MouseEvent
  | React.MouseEvent<HTMLDivElement>
  | React.ChangeEvent<HTMLSelectElement>

export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>

// =================================================================================================
// STATE
// =================================================================================================

export interface NoteState {
  notes: NoteItem[]
  activeNoteId: string | null
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
  menuToolbar: boolean;
  editable: boolean
  activeMenu: MenuType
  loading: boolean
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
