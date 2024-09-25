import { NotesSortKey } from "../enums"

export interface NoteItem {
    id: string
    text: string
    created: string
    lastUpdated: string
    category?: string
    isTags?: string[]
    isPinned?: boolean
    isTrash: boolean
    isArchived: boolean
  }
  
  export interface CategoryItem {
    id: string
    name: string
  }

  export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>


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

  export interface EditorState {
    editable: boolean;
  }

  export interface AppState {
    note: NoteState
    settings: SettingsState
    editor: EditorState
  }