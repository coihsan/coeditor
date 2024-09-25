import { useEffect, useContext } from 'react'
import css from "../../styles/editor.module.scss"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './menu-bar'
import { data } from './node-content'
import { cn } from "@/lib/utils"
import TextAlign from '@tiptap/extension-text-align'
import { EditorContext } from '@/lib/context'
import { LabelText } from '@/lib/label-text'
import ButtonMenu from '../primitive/button-menu'
import { Checkmark24Regular, NoteEdit24Regular } from '@fluentui/react-icons'

const Editor = () => {
    const { editable, setEditable } = useContext(EditorContext);
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: data,
        editable: true,
        autofocus: true
    })

    useEffect(() => {
        if (editable) {
            setEditable(true)
        }
    }, [editable])

    return (
        <div className='w-full h-full flex flex-col'>
            {editable &&
                <div className='p-2 flex items-center justify-center sticky top-0 w-full z-50'>
                    <MenuBar editor={editor} />
                </div>
            }
            <EditorContent
                className={cn('h-full h-screen bg-white/3 max-w-none overflow-y-scroll', css.editor)}
                editor={editor}
            />
            <ButtonMenu 
                side="top" 
                label={editable ? LabelText.SAVE_NOTE : LabelText.EDIT_NOTE} 
                variant={'ghost'} 
                className='rounded-none' 
                size={'default'} 
                action={() => setEditable(true)}
                >
                {editable ? <Checkmark24Regular /> : <NoteEdit24Regular />}
            </ButtonMenu>
        </div>
    )
}

export default Editor