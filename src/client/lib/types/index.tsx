import { NoteStatus, NotesSortKey } from "../enums"

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

export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>

// =================================================================================================
// STATE
// =================================================================================================

export interface NoteState {
  notes: NoteItem[]
  activeNoteId: string
  selectedNotesIds: string[]
  activeCategoryId: string
  error: string
  loading: boolean
  searchValue: string
}

export interface SettingsState {
  isOpen: boolean
  loading: boolean
  darkTheme: boolean
  notesSortKey: NotesSortKey
}

export interface AppState {
  editable: boolean
  isOpen: boolean
  loading: boolean
  darkTheme: boolean
}

export interface RootState {
  appState: AppState;
  noteState: NoteState;
  settingsState: SettingsState;
}
