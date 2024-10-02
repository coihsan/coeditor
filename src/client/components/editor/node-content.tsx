import { getActiveNotes } from '@/lib/helpers'
import Document from '@tiptap/extension-document'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '@/lib/redux/slice/notes'
import { fetchNotes } from '@/api/notes-api'
import { NoteItem } from '@/lib/types'

const _updateNotes = (note: NoteItem) =>{
    const dispatch = useDispatch()
    dispatch(updateNote(note))
}

const renderContent = () => {
    if(fetchNotes.length === 0){
        return 'heading block*'
    }
}

export const NodeContent = Document.extend({
    content: renderContent,
})