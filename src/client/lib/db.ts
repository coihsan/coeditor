import Dexie, { Table } from 'dexie';
import { NoteItem, NoteListType, TagItem } from './types';

export class ConotesApp extends Dexie {
  noteItem!: Table<NoteItem, number>;
  noteList!: Table<NoteListType, number>;
  tags!: Table<TagItem, number>;
  noteTags!: Table<{ noteId: number; tagId: number }, [number, number]>;

  constructor() {
    super('conotesApp');
    this.version(2).stores({
      noteItem: '++id, content, title, created, isFavorite, lastUpdated, isTrash, tags',
      noteList: '++id, name, type, notes',
      tags: '++id, name, color',
      noteTags: '[noteId+tagId], noteId, tagId'
    });
  };

}

export const db = new ConotesApp();