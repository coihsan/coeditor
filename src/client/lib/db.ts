import Dexie, { type EntityTable } from 'dexie';
import { NoteItem } from './types';


const db = new Dexie('notesDatabase') as Dexie & {
  notes: EntityTable<
  NoteItem,
    'id' | 'content' | 'title' | 'tags' | 'isTrash' | 'created' | 'isFavorite' | 'lastUpdated' 
  >;
};

db.version(1).stores({
  notes: '++id, content, title, tags, isTrash, created, isFavorite, lastUpdated ',
});

export type { NoteItem };
export { db };