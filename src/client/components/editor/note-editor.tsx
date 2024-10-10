import css from "../../styles/editor.module.scss"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { RootState } from "@/lib/redux/store"
import { useParams } from 'react-router-dom';
import { Input } from "../ui/input"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { setEditableEditor } from "@/lib/redux/slice/app"
import { NoteItem } from "@/lib/types"
import { saveNote } from "@/lib/redux/thunk"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import ButtonMenu from "../primitive/button-menu"
import { Edit20Filled, Save20Filled, Settings20Filled } from "@fluentui/react-icons"
import { LabelText } from "@/lib/label-text"
import MenuBar from "./menubar/menubar"
import dayjs from "dayjs"

const NoteEditor: React.FC = () => {
    const { noteId } = useParams();
    const dispatch = useAppDispatch()

    const notes = useAppSelector((state: RootState) => state.notes.notes);
    const [ title, setTitle ] = useState(notes.find((note) => noteId === note.id)?.title)
    const [ contentNotes, setContentNotes ] = useState(notes.find((note) => noteId === note.id)?.content)
    const editable = useAppSelector((state: RootState) => state.app.editable);

    useEffect(() => {
        if (editable) {
            dispatch(setEditableEditor(true));
        }
        }, [editable]);

    const saveNoteToDB = async () => {
        if (editor && noteId && title) {
            try {
                const note: NoteItem = {
                    id: noteId,
                    content: contentNotes || '',
                    created: dayjs().format(),
                    lastUpdated: dayjs().format(),
                    trash: false,
                    title: title || '',
                    tags: [],
                    boomark: false
                };
                dispatch(saveNote(note));
            } catch (error) {
                console.error("Error saving note:", error);
            }
        }
    };

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading:{
                    levels: [1, 2, 3, 4, 5, 6],
                }
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Placeholder.configure({
                placeholder: 'Write something ...'
            }),
        ],
        editable: editable,
        content: contentNotes,
        onUpdate: ({ editor }) => {
            setContentNotes(editor.getHTML())
            saveNoteToDB();
        },
    })

    return (
        <div className="border rounded-2xl flex flex-col h-full w-full">
            <div className="border-b-[1px] py-2 px-4 static flex items-center justify-between">
                    <Input
                        onChange={(e) => {
                            setTitle(e.target.value);
                            saveNoteToDB();
                        }}
                        className="text-xl max-w-screen-sm px-0 font-medium border-none rounded-none"
                        value={title} 
                        type="text"
                        placeholder={title ? title : "Title"}
                    />
                    <div className="flex items-center">
                    <div className="text-muted-foreground text-xs pr-4">04.54 on 09/10/2024</div>
                    
                    {editable ? (
                        <ButtonMenu
                            className="flex items-center gap-3"
                            label={LabelText.SAVE_NOTES}
                            action={() => {
                                dispatch(setEditableEditor(false));
                                saveNoteToDB();
                            }} variant={'ghost'} size={'default'}>
                                <Save20Filled /> 
                                Save
                            </ButtonMenu>
                    ) : (
                        <ButtonMenu
                            className="flex items-center gap-3"
                            label={LabelText.EDIT_NOTE}
                            action={() => {
                                dispatch(setEditableEditor(true));
                            }} variant={'ghost'} size={'default'}>
                                <Edit20Filled />
                                Edit
                            </ButtonMenu>
                    )
                    }
                    <ButtonMenu label={LabelText.SETTINGS} variant={'ghost'} size={'icon'}>
                        <Settings20Filled />
                    </ButtonMenu>
                </div>
                </div>
            {editable && <MenuBar editor={editor} />}
            <ScrollArea className="h-full">
                <EditorContent
                    className={cn(css.editor)}
                    editor={editor}
                    placeholder="Write something ..."
                />
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    )
}

export default NoteEditor