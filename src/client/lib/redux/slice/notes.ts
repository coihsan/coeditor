import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { NoteItem, NoteState } from '@/lib/types'
import { loadNotes, saveNote } from '../thunk'

const initialState: NoteState = {
  notes: [],
  activeTagsId: '',
  activeNoteId: uuid(),
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
  reducers: {
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
    setNotes: (state, action: PayloadAction<NoteItem[]>) => {
      state.notes = action.payload;
    },
    setActiveNote: (state, action: PayloadAction<NoteItem>) => {
      state.activeNoteId = action.payload.id;
    },
    setActiveTags: (state, { payload }: PayloadAction<string>) => {
      state.activeTagsId = payload
    },
    deleteNoteFromState: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    setFavorite: (state, { payload }: PayloadAction<string>) => {
      state.notes = state.notes.map((note) =>
        note.id === payload ? { ...note, isFavorite: !note.isFavorite } : note
      )
    },
    tagsNote: (state, { payload }: PayloadAction<{ notesId: string }>) => {
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
  },
  extraReducers: (builder) => {
    // Handle loadNotes
    builder
      .addCase(loadNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload ?? [];
      })

      .addCase(loadNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Handle saveNote
    builder
      .addCase(saveNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveNote.fulfilled, (state, action: PayloadAction<NoteItem>) => {
        state.loading = false;
        const index = state.notes.findIndex(note => note.id === action.payload.id);
        if (index >= 0) {
          state.notes[index] = action.payload;
        } else {
          state.notes.push(action.payload);
        }
      })
      .addCase(saveNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export const {
  addNote,
  deleteNoteFromState,
  setActiveNote,
  setActiveTags,
  setNotes,
  setFavorite,
  tagsNote,
  selectNote,
  searchNotes,
  updateNote,
} = notesSlice.actions

export default notesSlice.reducer