import css from "../../styles/editor.module.scss"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import { cn } from "@/lib/utils"
import MenuBar from "./menubar/menu-bar"
import React from "react"
import { initialContent } from "./schema"

const NoteEditor : React.FC = () => {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading:{
                    levels: [1, 2, 3, 4, 5, 6],
                },
                horizontalRule:{
                    HTMLAttributes: {
                        class: 'hr',
                    },
                },
                dropcursor:{
                    color: 'red',
                },
            }),
            // Placeholder.configure({
            //     placeholder: ({ node }) => {
            //         if (node.type.name === 'heading') {
            //             return 'What’s the title?'
            //         }
                    
            //         return 'Can you add some further context?'
            //     },
            // }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: initialContent,
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

export default NoteEditor