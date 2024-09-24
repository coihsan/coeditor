import { useState, useEffect } from 'react'
import css from "../../styles/editor.module.css"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './menu-bar'
import { data } from './content'
import { cn } from "@/lib/utils"
import { CheckIcon, ClipboardIcon, DownloadIcon, Pencil2Icon, StarIcon, TrashIcon } from '@radix-ui/react-icons'
import TextAlign from '@tiptap/extension-text-align'
import { ModeToggle } from '../global/mode-toggle'
import ButtonMenu from '../global/button-menu'

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
        <div className='w-full h-full grid'>
            {editable &&
                <div className='flex items-center justify-between w-full sticky p-2 top-0 border-b-2 border-muted-fourground z-50'>
                    <MenuBar editor={editor} />
                </div>
            }
            <EditorContent
                className={cn('prose prose-zinc h-screen max-w-none overflow-y-scroll', css.editor)}
                editor={editor}
            />
            <pre className="w-full border rounded-lg p-2 bg-slate-900 text-slate-50 overflow-auto">
                {JSON.stringify(editor?.getJSON(), null, 2)}
            </pre>
            <div className='sticky w-full bg-background bottom-0 mt-0 border-t-2 border-muted-fourground flex items-center justify-between z-50'>
                <div className='flex'>
                    <ButtonMenu label='Edit notes' variant={'ghost'} className='rounded-none' size={'lg'} action={() => setEditable(!editable)}>{editable ? <CheckIcon /> : <Pencil2Icon />}</ButtonMenu>
                    <ButtonMenu label='Add to favourite' variant={'ghost'} className='rounded-none' size={'lg'}>
                        <StarIcon />
                    </ButtonMenu>
                    <ButtonMenu label='Delete notes' variant={'ghost'} className='rounded-none' size={'lg'}>
                        <TrashIcon />
                    </ButtonMenu>
                    <ButtonMenu label='Copy notes' variant={'ghost'} className='rounded-none' size={'lg'}>
                        <ClipboardIcon />
                    </ButtonMenu>
                    <ButtonMenu label='Download notes' variant={'ghost'} className='rounded-none' size={'lg'}>
                        <DownloadIcon />
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