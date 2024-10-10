import Dexie, { Table } from 'dexie';
import { NoteItem, NoteListType, TagItem } from './types';

export class ConotesApp extends Dexie {
  noteItem!: Table<NoteItem, number>;
  noteList!: Table<NoteListType, number>;
  tags!: Table<TagItem, number>;
  noteTags!: Table<{ noteId: number; tagId: number }, [number, number]>;

  constructor() {
    super('conotesApp');
    this.version(3).stores({
      noteItem: '++id, content, title, created, boomark, lastUpdated, trash, tags',
    });
  };

}

export const db = new ConotesApp();