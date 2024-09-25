import { useEffect } from 'react'
import css from "../../styles/editor.module.scss"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { data } from './node-content'
import { cn } from "@/lib/utils"
import TextAlign from '@tiptap/extension-text-align'
import { setEditable } from '@/lib/redux/slice/editor-slice';
import { useAppSelector } from '@/lib/redux/hooks';
import MenubarOptions from './menu-bar-options'

const Editor = () => {
    const editable = useAppSelector((state) => state.editor.editable);

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: data,
        editable: editable,
        autofocus: true
    })

    useEffect(() => {
        if (editable) {
            setEditable(true)
        }
    }, [editable])

    return (
        <div className='w-full h-full flex flex-col'>
            <MenubarOptions editor={editor} />
            <EditorContent
                className={cn('h-full h-screen bg-white/3 max-w-none overflow-y-scroll', css.editor)}
                editor={editor}
            />
        </div>
    )
}

export default Editor