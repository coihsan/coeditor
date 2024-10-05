import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'
import { startNote } from '@/lib/constants';
import { NoteItem } from '@/lib/types';
import { db } from '@/lib/db';

const welcomeApp: NoteItem = {
    id: uuid(),
    title: 'Welcome to Conotes',
    content: startNote,
    created: dayjs().format(),
    lastUpdated: dayjs().format(),
    tags: [],
    isTrash: false,
    isFavorite: false,
}

export const reqNotes = async () => {
  try {
    const notes = await db.notes.toArray();

    if (notes.length === 0 || !notes.some(note => note.id === welcomeApp.id)) {
      await db.notes.add(welcomeApp); 
      return [welcomeApp, ...notes];
    } else {
      return notes;
    }
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error; 
  }
};
