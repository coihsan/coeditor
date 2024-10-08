import css from "../../styles/editor.module.scss"
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { RootState } from "@/lib/redux/store"
import { useParams } from 'react-router-dom';
import { useLiveQuery } from "dexie-react-hooks"
import { db } from "@/lib/db"
import StaticToolbar from "./menubar/static-toolbar"
import { Input } from "../ui/input"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { setEditableEditor } from "@/lib/redux/slice/app"
import { NoteItem } from "@/lib/types"
import { saveNote } from "@/lib/redux/thunk"
import dayjs from "dayjs"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import ButtonMenu from "../primitive/button-menu"
import { ArrowDownload24Regular, Copy24Regular, Edit24Regular, Save24Regular, Settings24Regular } from "@fluentui/react-icons"
import { LabelText } from "@/lib/label-text"
import BubbleToolbar from "./menubar/bubble-toolbar"
import MenuBar from "./menubar/menubar"

const NoteEditor: React.FC = () => {
    const { noteId } = useParams();
    const dispatch = useAppDispatch()
    const notes = useAppSelector((state: RootState) => state.notes.notes);
    const toggleEditor = useAppSelector((state: RootState) => state.app.menuToolbar)
    const [title, setTitle] = useState(notes.find((note) => note.id === noteId)?.title)

    const noteContentId = useLiveQuery(async () => {
        const response = await db.noteItem.toArray();
        return response.find((item) => item.id.toString() === noteId)?.content;
    }
    )

    const editable = useAppSelector((state: RootState) => state.app.editable);
    useEffect(() => {
        if (editable) {
            dispatch(setEditableEditor(true))
        }
    }, [editable])

    const saveNoteToDB = async () => {
        if (editor && noteId && title) {
            try {
                const note: NoteItem = {
                    id: noteId,
                    title: title,
                    content: editor.getHTML(),
                    created: dayjs().format(),
                    lastUpdated: dayjs().format(),
                    isTrash: false,
                    isFavorite: false
                };
                dispatch(saveNote(note));
            } catch (error) {
                console.error("Error saving note:", error);
            }
        }
    };

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
        editable: editable,
        content: noteContentId,
    })

    return (
        <div className="border rounded-2xl flex flex-col h-full w-full">
            <div className="border-b-[1px] py-4 px-4 static relative">
                <Input
                    onChange={(e) => {
                        setTitle(e.target.value);
                        saveNoteToDB();
                    }}
                    className="text-xl px-0 max-w-prose font-medium border-none rounded-none"
                    value={title} type="text"
                    placeholder="What’s the title?"
                />
                <div className="absolute right-4 top-4 flex items-center gap-2">
                    <div className="text-muted-foreground text-xs">04.54 on 09/10/2024</div>
                    {editable ? (
                        <ButtonMenu
                            label={LabelText.SAVE_NOTES}
                            action={() => {
                                dispatch(setEditableEditor(false));
                                saveNoteToDB();
                            }} variant={'ghost'} size={'icon'}><Save24Regular /></ButtonMenu>
                    ) : (
                        <ButtonMenu
                            label={LabelText.EDIT_NOTE}
                            action={() => {
                                dispatch(setEditableEditor(true));
                                saveNoteToDB();
                            }} variant={'ghost'} size={'icon'}><Edit24Regular /></ButtonMenu>
                    )
                    }
                    <ButtonMenu label={LabelText.SETTINGS} variant={'ghost'} size={'icon'}>
                        <Settings24Regular />
                    </ButtonMenu>
                    <ButtonMenu label={LabelText.COPY_NOTES} variant={'ghost'} size={'icon'}>
                        <Copy24Regular />
                    </ButtonMenu>
                    <ButtonMenu label={LabelText.SETTINGS} variant={'ghost'} size={'icon'}>
                        <ArrowDownload24Regular />
                    </ButtonMenu>
                </div>
            </div>
            {editable && <MenuBar editor={editor} />}
            <ScrollArea className="h-full">
                <EditorContent
                    className={cn(css.editor)}
                    editor={editor}
                    placeholder="Write something ..."
                    onChange={() => {
                        saveNoteToDB();
                    }}
                />
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    )
}

export default NoteEditor