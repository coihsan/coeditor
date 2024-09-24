import { v4 } from "uuid";
import { NoteItem } from "./types";
import dayjs from "dayjs";
import { LabelText } from "./label-text";

const newNote = (categoryId?: string, tagsId?: string[]): NoteItem => ({
    id: v4(),
    text: '',
    created: dayjs().format(),
    lastUpdated: dayjs().format(),
    category: categoryId,
    isTags: tagsId,
    isTrash: false,
    isArchived: false,
  })

  export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
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

  export const getNoteTitle = (text: string): string => {
    const noteText = text.trim().match(/[^#]{1,45}/)
    return noteText ? noteText[0].trim().split(/\r?\n/)[0] : LabelText.CREATE_NEW_NOTE
  }
  