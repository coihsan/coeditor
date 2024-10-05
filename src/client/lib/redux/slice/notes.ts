import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { NoteItem, NoteState } from '@/lib/types'
import { fetchNotes } from '@/api'

const initialState: NoteState = {
    notes: [],
    activeTagsId: '',
    activeNoteId: '',
    selectedNotesIds: [],
    searchValue: '',
    error: null,
    loading: true,
    status: 'loading',
  }

export const getFirstNoteId = {
  notes: [],

}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers:{
        addNote: (state, { payload }: PayloadAction<NoteItem>) => {
            state.notes.push({
              id: uuid(),
              title: payload.title,
              content: payload.content,
              created: payload.created,
              lastUpdated: payload.lastUpdated,
              tags: payload.tags,
              isTrash: payload.isTrash,
              isFavorite: payload.isFavorite
            })
        },
        deleteNote: (state, { payload }: PayloadAction<string>) => {
            state.notes = state.notes.filter((note) => note.id !== payload)
        },
        setFavorite: (state, { payload }: PayloadAction<string>) => {
            state.notes = state.notes.map((note) =>
              note.id === payload ? { ...note, isFavorite: !note.isFavorite } : note
          )
        },
        tagsNote: (state, {payload} : PayloadAction<{notesId: string}>) =>{
            const note = state.notes.find((note) => note.id === payload.notesId)
            if (note) {
                state.activeTagsId
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
                note.content = payload.content
                note.lastUpdated = payload.lastUpdated
            }
        },
        toggleFavoriteNotes: (state, { payload }: PayloadAction<string>) => {
            state.notes = state.selectedNotesIds.includes(payload)
              ? state.notes.map((note) =>
                  state.selectedNotesIds.includes(note.id) ? { ...note, favorite: !note.tags } : note
                )
              : state.notes.map((note) =>
                  note.id === payload ? { ...note, favorite: !note.tags } : note
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
          },
    },
    extraReducers: (builder) => { 
        builder
          .addCase(fetchNotes.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchNotes.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.notes = action.payload;
          })
          .addCase(fetchNotes.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})

export const {
    addNote,
    deleteNote,
    setFavorite,
    tagsNote,
    selectNote,
    searchNotes,
    updateNote,
} = notesSlice.actions

export default notesSlice.reducer