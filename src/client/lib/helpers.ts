import { v4 } from "uuid";
import { NoteItem } from "./types";
import dayjs from "dayjs";
import { LabelText } from "./label-text";
import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

export const newNote = (title?: string, tagsId?: string[]): NoteItem => ({
  id: v4(),
  content: '',
  title: title || '',
  created: dayjs().format(),
  lastUpdated: dayjs().format(),
  tags: tagsId,
  trash: false,
  boomark: false,
})

export const saveNoteToDB = async (note: NoteItem) => {
  return await db.noteItem.put(note);
};

export const fetchNotesFromDB = () => {
  return useLiveQuery(async () => {
    const notes = await db.noteItem.toArray();
    return notes;
  });
};

export const copyToClipboard = (content: string) => {
  navigator.clipboard.writeText(content)
}

export const getDayJsLocale = (languagetoken: string): string => {
  try {
    require('dayjs/locale/' + languagetoken + '.js')

    return languagetoken
  } catch (error) {
    if (languagetoken.includes('-'))
      return getDayJsLocale(languagetoken.substring(0, languagetoken.lastIndexOf('-')))

    return 'en'
  }
}

export const getNotesTitle = (title: string): string => {
  const noteText = title.trim().match(/[^#]{1,45}/)
  return noteText ? noteText[0].trim().split(/\r?\n/)[0] : LabelText.CREATE_NEW_NOTE
}

export const debounceEvent = <T extends Function>(cb: T, wait = 20) => {
  let h = 0
  const callable = (...args: any) => {
    clearTimeout(h)
    h = window.setTimeout(() => cb(...args), wait)
  }

  return <T>(<any>callable)
}