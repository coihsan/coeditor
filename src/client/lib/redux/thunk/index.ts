import { db } from '@/lib/db'; 
import { fetchNotesFromDB, saveNoteToDB } from '@/lib/helpers';
import { NoteItem } from '@/lib/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteNoteFromState, updateNote } from '../slice/notes';


export const createNote = createAsyncThunk(
  'note/createNote',
  async (note: NoteItem, { rejectWithValue }) => {
    try {
      const response = await db.noteItem.add(note);
      return {
        ...note,
        response,
      };
    } catch (error) {
      return rejectWithValue(error); 
    }
  }
);

export const fetchNotes = createAsyncThunk(
    'notes/loadNotes',
    async (_, { rejectWithValue }) => {
        try {
            const notes = fetchNotesFromDB();
            return notes;
        } catch (error) {
            return rejectWithValue('Failed to load notes');
        }
    }
);

export const saveNote = createAsyncThunk(
    'notes/saveNote',
    async (note: NoteItem, thunkAPI) => {
        try {
            await saveNoteToDB(note);
            thunkAPI.dispatch(updateNote(note));
            return note;
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to save note');
        }
    }
);


export const deleteNote = createAsyncThunk(
  'notes/deleteNote',
  async (noteId: string, { dispatch }) => {
    try {
      const numericNoteId = Number(noteId);
      await db.noteItem.delete(numericNoteId);
      dispatch(deleteNoteFromState(noteId)); 
      return noteId;
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error; 
    }
  }
);

