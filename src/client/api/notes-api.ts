import { createAsyncThunk } from '@reduxjs/toolkit';
import { reqNotes } from '.';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await reqNotes();
  return response;
});
