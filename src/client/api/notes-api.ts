import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'
import { startNote } from '@/lib/constants';
import { NoteItem } from '@/lib/types';

const welcomeApp = {
    id: uuid(),
    content: startNote,
    created: dayjs().format(),
    lastUpdated: dayjs().format(),
    category: '',
    isTags: [],
    isPinned: false,
    isTrash: false,
    isFavorite: false,
    author: 'visitor'
}
type PromiseCallback = (value?: any) => void
type dataLocalStorage = 
    (
        key: string,
        errorMessage?: string
    ) => (resolve : PromiseCallback, reject: PromiseCallback) => void

const getDataLocalStorage : dataLocalStorage = (key, errorMessage = "Oopps! Something went wrong") => (
    resolve,
    reject
) => {
    try {
        const data = localStorage.getItem(key)
        if (data) {
            resolve(JSON.parse(data))
        } else {
            reject(errorMessage)
        }
    } catch (error) {
        console.log(error)
    }
}

const getDataUserNotes = () => (resolve : PromiseCallback, reject: PromiseCallback) => {
    try {
        const getData : any = getDataLocalStorage('notes')

        if(!getData){
            localStorage.setItem('notes', JSON.stringify([welcomeApp]))
            resolve([welcomeApp])
        } else if(Array.isArray(JSON.parse(getData))) {
            resolve(
                JSON.parse(getData).length === 0 || JSON.parse(getData).find((note: NoteItem) => note.id === welcomeApp.id) 
                ? [welcomeApp, ...JSON.parse(getData)] 
                : JSON.parse(getData)
            )
        }
    } catch (error) {
        console.log(error)
        reject({
            message: 'Something went wrong',
          })
    }
}

export const reqNotes = () => new Promise(getDataUserNotes()) 