import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { NoteItem, NoteState } from '../types'

const initialState: NoteState = {
    notes: [],
    activeCategoryId: '',
    activeNoteId: '',
    selectedNotesIds: [],
    searchValue: '',
    error: '',
    loading: true,
  }

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers:{
        addNote: (state, { payload }: PayloadAction<NoteItem>) => {
            state.notes.push({
                id: uuid(),
                created: payload.created,
                lastUpdated: payload.lastUpdated,
                text: payload.text,
                isTags: payload.isTags,
                category: payload.category,
                isPinned: false,
                isArchived: false,
                isTrash: false,
            })
        },
        deleteNote: (state, { payload }: PayloadAction<string>) => {
            state.notes = state.notes.filter((note) => note.id !== payload)
        },
        archiveNote: (state, { payload }: PayloadAction<string>) => {
            const note = state.notes.find((note) => note.id === payload)
            if (note) {
                note.isArchived = !note.isArchived
            }
        },
        tagsNote: (state, {payload} : PayloadAction<{notesId: string}>) =>{
            const note = state.notes.find((note) => note.id === payload.notesId)
            if (note) {
                state.activeCategoryId
            }
        },
        selectNote: (state, { payload }: PayloadAction<string[]>) => {
            state.selectedNotesIds = payload
        },
        searchNotes: (state, { payload }: PayloadAction<string>) => {
            state.searchValue = payload
        },
        updateNote: (state, { payload }: PayloadAction<NoteItem>) => {
            const note = state.notes.find((note) => note.id === payload.id)
            if (note) {
                note.text = payload.text
                note.lastUpdated = payload.lastUpdated
            }
        },
        toggleFavoriteNotes: (state, { payload }: PayloadAction<string>) => {
            state.notes = state.selectedNotesIds.includes(payload)
              ? state.notes.map((note) =>
                  state.selectedNotesIds.includes(note.id) ? { ...note, favorite: !note.isTags } : note
                )
              : state.notes.map((note) =>
                  note.id === payload ? { ...note, favorite: !note.isTags } : note
                )
          },
          removeCategoryfromNotes: (state, { payload }: PayloadAction<string>) => {
            state.notes = state.notes.map((note) =>
              note.id === payload ? { ...note, category: '' } : note
            )
          },
          addCategoryFromNotes: (state, { payload } : PayloadAction<{categoryId: string; noteId: string}>) =>{
            state.notes = state.selectedNotesIds.includes(payload.noteId) 
            ? state.notes.map((note) =>
                state.selectedNotesIds.includes(note.id)
                  ? { ...note, category: payload.categoryId }
                  : note
              ) 
            : state.notes.map((note) =>
                note.id === payload.noteId ? { ...note, category: payload.categoryId } : note
              )
          }
    }
})

export const {
    addNote,
    deleteNote,
    archiveNote,
    tagsNote,
    selectNote,
    searchNotes,
    updateNote,
} = notesSlice.actions

export default notesSlice.reducer