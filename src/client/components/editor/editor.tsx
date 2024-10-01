import css from "../../styles/editor.module.scss"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { data } from './node-content'
import TextAlign from '@tiptap/extension-text-align'
import { cn } from "@/lib/utils"
import MenuBar from "./menubar/menu-bar"

const Editor = () => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: data,
    })

    return (
        <>
            <MenuBar editor={editor} />
            <EditorContent
                className={cn('border rounded-2xl', css.editor)}
                editor={editor}
            />
        </>
    )
}

export default Editor