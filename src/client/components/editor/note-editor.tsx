import css from "../../styles/editor.module.scss"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { RootState } from "@/lib/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { useLiveQuery } from "dexie-react-hooks"
import { db } from "@/lib/db"
import StaticToolbar from "./menubar/static-toolbar"
import { Input } from "../ui/input"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { setEditableEditor } from "@/lib/redux/slice/app"

type Props = {
    content?: string
    titleNotes?: string
}

const NoteEditor : React.FC<Props> = ({}) => {
    const { noteId } = useParams();
    const dispatch = useDispatch()
    const notes = useSelector((state: RootState) => state.notes.notes);
    const [title, setTitle] = useState(notes.find((note) => note.id === noteId)?.title)

    const noteContentId = useLiveQuery(async () => {
        const response = await db.noteItem.toArray();
        return response.find((item) => item.id.toString() === noteId)?.content;
    }
    )

    const editable = useSelector((state: RootState) => state.app.editable);
    useEffect(() => {
        if (editable) {
            dispatch(setEditableEditor(true))
        }
    }, [editable])

    const activeNoteId = useSelector((state: RootState) => state.notes.activeNoteId);
    const activeNote = notes.find((note) => note.id === activeNoteId);

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Placeholder.configure({
                placeholder: 'Write something ...'
            }),
        ],
        editable: true,
        content: noteContentId,
    })

    return (
        <div className="border rounded-2xl flex flex-col h-full w-full">
            {editable && <StaticToolbar editor={editor} />}
            <div className="border-b-[1px] py-4 px-4 static w-full">
                <Input
                    onFocus={() => {
                        dispatch(setEditableEditor(true))
                    }}
                    onBlur={() => {
                        dispatch(setEditableEditor(false))
                    }} 
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }} 
                    className="text-xl px-0 font-medium border-none rounded-none" value={title} type="text" placeholder="What’s the title?"
                />
                <span className="text-muted-foreground text-xs">Last update</span>
            </div>
            <ScrollArea className="h-full">
                <EditorContent
                    className={cn(css.editor)}
                    editor={editor}
                    onFocus={() => {
                        dispatch(setEditableEditor(true))
                    }}
                    onBlur={() => {
                        dispatch(setEditableEditor(false))
                    }}
                />
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    )
}

export default NoteEditor