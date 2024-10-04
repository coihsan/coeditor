import { useDispatch } from 'react-redux'
import { updateNote } from '@/lib/redux/slice/notes'
import { fetchNotes } from '@/api'
import { NoteItem } from '@/lib/types'


const _updateNotes = (note: NoteItem) =>{
const dispatch = useDispatch()
    dispatch(updateNote(note))
}

export const initialContent = {
  type: 'doc',
  content: [
    {
      type: 'createdAt',
      content: [
        {
          type: 'text',
          text: 'Created At'
        }
      ]
    },
    {
      type: 'author',
      content: [
        {
          type: 'text',
          text: 'Author'
        }
      ]
    },
    {
      type: 'heading',
      attrs: {
        level: 1
      },
      content: [
        {
          type: 'text',
          text: 'Heading' || null,
        }
      ]
    },
    {
        type: 'horizontalRule'
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Write something here...'
        }
      ]
    }
  ]
}
