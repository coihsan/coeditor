import React, { useRef, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks';
import { useDispatch, useSelector } from 'react-redux'
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ButtonMenu from '../primitive/button-menu';
import { addNote, deleteNote, searchNotes, updateNote } from '@/lib/redux/slice/notes';
import { AddSquare24Regular, Filter24Regular, MoreHorizontal24Regular } from '@fluentui/react-icons';
import { debounceEvent } from '@/lib/helpers';
import SearchBar from '../search-bar';
import { LabelText } from '@/lib/label-text';
import { NoteItem, ReactMouseEvent } from '@/lib/types';
import { getNotes } from '@/lib/redux/selector';
import { db } from '@/lib/db';
import { Separator } from '../ui/separator';
import { v4 } from 'uuid';
import dayjs from 'dayjs';
import { Button } from '../ui/button';
import SettingsMenuNotes from '../settings/settings-menu-notes';

const NoteList = () => {
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
    const [ tags, setTags ] = useState([''])
    const [ date, setDate ] = useState('')

    const [optionsId, setOptionsId] = useState('')

    // const contextMenuRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const dispatch = useDispatch()

    const notes = useLiveQuery(
        async () =>{
            const notes = await db.notes.toArray()
            return notes
        }
    )

    const _addNote = (note: NoteItem) => dispatch(addNote(note))
    const _deleteNote = (note: NoteItem) => dispatch(deleteNote(note.id))
    const _updateNote = (note: NoteItem) => dispatch(updateNote(note))

    const _searchNotes = debounceEvent(
        (searchValue: string) => dispatch(searchNotes(searchValue)),
        100
    )

    const handleNewNote = async () => {
        try {
            const newNote = await db.notes.add({
                id: v4(),
                content: '',
                title: '',
                tags: '',
                created: dayjs().format('YYYY-MM-DD'),
                lastUpdated: dayjs().format('YYYY-MM-DD'),
                isTrash: false,
                isFavorite: false,
            })
        } catch (error) {
            
        }
    }

    const handleClickNotesId = (e: ReactMouseEvent, noteId: string = '') => {
        const clicked = e?.target

        if (!clicked) return
    }

    return (
        <aside className='py-4 border rounded-2xl mx-2 bg-zinc-100 dark:bg-white/5 h-full'>
            <div className='static px-2'>
                <div className="flex items-center justify-between mb-2 px-4">
                    <span className="text-xl font-bold">{LabelText.NOTES}</span>
                    <div>
                        <ButtonMenu action={handleNewNote} side="bottom" variant={'ghost'} size={'icon'} label={LabelText.CREATE_NEW_NOTE}>
                            <AddSquare24Regular />
                        </ButtonMenu>
                        <ButtonMenu side="bottom" variant={'ghost'} size={'icon'} label={LabelText.FILTER}>
                            <Filter24Regular />
                        </ButtonMenu>
                    </div>
                </div>
                <SearchBar searchRef={searchRef} searchQuery={_searchNotes} />
            </div>
            <Separator className='my-4' orientation='horizontal' />
            <ScrollArea className='h-full pb-32 px-2'>
                {notes?.length === 0 ? (
                    <div className='p-4 flex items-center justify-center italic text-muted-foreground text-sm'>No one notes it's here</div>
                ) : (   
                    <div className='grid grid-cols-1 gap-2'>
                        {notes?.map((item) => (
                        <div onClick={handleClickNotesId} role='button' key={item.id} className='flex items-center justify-between p-4 border rounded-xl bg-white hover:bg-muted dark:bg-transparent hover:dark:bg-zinc-900 shadow-sm' >
                            <div className='flex flex-col'>
                                <span className='text-xs text-muted-foreground'>{item.tags}</span>
                                <div className='text-xl font-bold'>{item.title}</div>
                            </div>
                            <SettingsMenuNotes />
                        </div>
                        ))}
                    </div>
                )}
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </aside>
    )
}

export default NoteList;