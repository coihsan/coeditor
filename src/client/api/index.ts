import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'
import { NoteItem, SettingsState } from '@/lib/types'

const content = `# Welcome to coeditor!`

const welcomeNote = {
    id: uuid(),
    text: content,
    category: '',
    favorite: false,
    created: dayjs().format(),
    lastUpdated: dayjs().format(),
  }
  type PromiseCallback = (value?: any) => void
  type GetLocalStorage = (
    key: string,
    errorMessage?: string
  ) => (resolve: PromiseCallback, reject: PromiseCallback) => void

  const getLocalStorage: GetLocalStorage = (key, errorMessage = 'Something went wrong') => (
    resolve,
    reject
  ) => {
    const data = localStorage.getItem(key)
  
    if (data) {
      resolve(JSON.parse(data))
    } else {
      reject({
        message: errorMessage,
      })
    }
  }

  const getUserNotes = () => (resolve: PromiseCallback, reject: PromiseCallback) => {
    const notes: any = localStorage.getItem('notes')
  
    if (!notes) {
      resolve([welcomeNote])
    } else if (Array.isArray(JSON.parse(notes))) {
      resolve(
        JSON.parse(notes).length === 0 || !JSON.parse(notes).find((note: NoteItem) => note)
          ? [...JSON.parse(notes)]
          : JSON.parse(notes)
      )
    } else {
      reject({
        message: 'Something went wrong',
      })
    }
  }

  export const saveState = ({ categories, notes }: { categories: any; notes: any }) =>
    new Promise((resolve) => {
      localStorage.setItem('categories', JSON.stringify(categories))
      localStorage.setItem('notes', JSON.stringify(notes))
  
      resolve({
        categories: JSON.parse(localStorage.getItem('categories') || '[]'),
        notes: JSON.parse(localStorage.getItem('notes') || '[]'),
      })
    })
  
  export const saveSettings = ({ isOpen, ...settings }: SettingsState) =>
    Promise.resolve(localStorage.setItem('settings', JSON.stringify(settings)))
  
  export const requestNotes = () => new Promise(getUserNotes())
  export const requestCategories = () => new Promise(getLocalStorage('categories'))
  export const requestSettings = () => new Promise(getLocalStorage('settings'))