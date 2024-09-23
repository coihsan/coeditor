import { useState, useEffect } from 'react'
import css from "../../styles/editor.module.css"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './menu-bar'
import { data } from './content'
import { cn } from "@/lib/utils"
import { Toggle } from '../ui/toggle'
import { CheckIcon, Pencil2Icon } from '@radix-ui/react-icons'
import TextAlign from '@tiptap/extension-text-align'

const Editor = () =>{
    const [editable, setEditable] = useState(false)
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
              }),
        ],
        content: data,
        editable
    })

    useEffect(() => {
        if(editable){
            setEditable(true)
        }
    }, [editable])

    return(
        <div className='relative w-screen h-full'>
            <div className='flex items-center justify-between w-full sticky p-2 top-0 bg-background border-b-2 border-zinc-900 z-50'>
                {editable ? <MenuBar editor={editor} /> : null}
                <Toggle onClick={() => setEditable(!editable)}>{editable ? <CheckIcon /> : <Pencil2Icon />}</Toggle>
            </div>
                <EditorContent 
                className={cn('prose min-w-full pb-12 md:pb-16 lg:min-w-0 lg:w-full h-full pt-0 md:pt-14 overflow-y-scroll', css.editor)}
                editor={editor}
                />
        </div>
    )
}

export default Editor