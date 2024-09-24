import { useState, useEffect } from 'react'
import css from "../../styles/editor.module.css"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './menu-bar'
import { data } from './content'
import { cn } from "@/lib/utils"
import TextAlign from '@tiptap/extension-text-align'
import { ModeToggle } from '../global/mode-toggle'
import ButtonMenu from '../global/button-menu'
import { ArrowDownload24Regular, Checkmark24Regular, Clipboard24Regular, Delete24Regular, NoteEdit24Regular, StarAdd24Regular } from '@fluentui/react-icons'
import { LabelText } from '@/lib/label-text'

const Editor = () => {
    const [editable, setEditable] = useState(false)
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: data,
        editable,
    })

    useEffect(() => {
        if (editable) {
            setEditable(true)
        }
    }, [editable])

    return (
        <div className='w-full h-full flex flex-col'>
            {editable &&
                <div className='flex items-center justify-between sticky top-0 bg-muted z-50'>
                    <MenuBar editor={editor} />
                </div>
            }
            <EditorContent
                className={cn('prose prose-zinc h-screen max-w-none overflow-y-scroll', css.editor)}
                editor={editor}
            />
            <div className='sticky w-full bg-background bottom-0 h-auto mt-0 border-t-2 border-muted-fourground flex items-center justify-between z-50'>
                <div className='flex flex-nowrap'>
                    <ButtonMenu side="top" label={editable ? LabelText.SAVE_NOTE : LabelText.EDIT_NOTE} variant={'ghost'} className='rounded-none' size={'default'} action={() => setEditable(!editable)}>{editable ? <Checkmark24Regular /> : <NoteEdit24Regular />}</ButtonMenu>
                    <ButtonMenu side="top" label={LabelText.MARK_AS_FAVORITE} variant={'ghost'} className='rounded-none' size={'default'}>
                        <StarAdd24Regular />
                    </ButtonMenu>
                    <ButtonMenu side="top" label={LabelText.DELETE} variant={'ghost'} className='rounded-none' size={'default'}>
                        <Delete24Regular />
                    </ButtonMenu>
                    <ButtonMenu side="top" label={LabelText.COPY_NOTES} variant={'ghost'} className='rounded-none' size={'default'}>
                        <Clipboard24Regular />
                    </ButtonMenu>
                    <ButtonMenu side="top" label={LabelText.DOWNLOAD_NOTES} variant={'ghost'} className='rounded-none' size={'default'}>
                        <ArrowDownload24Regular />
                    </ButtonMenu>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Editor