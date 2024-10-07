import React, { useMemo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ButtonMenu from '../primitive/button-menu';
import { addNote, deleteNoteFromState, searchNotes, setActiveNote, updateNote } from '@/lib/redux/slice/notes';
import { AddSquare24Regular, Filter24Regular, NoteAdd24Regular } from '@fluentui/react-icons';
import { debounceEvent, getShortUUID } from '@/lib/helpers';
import SearchBar from '../search-bar';
import { LabelText } from '@/lib/label-text';
import { NoteItem } from '@/lib/types';
import { db } from '@/lib/db';
import { Separator } from '../ui/separator';
import { v4 } from 'uuid';
import dayjs from 'dayjs';
import SettingsMenuNotes from '../settings/settings-menu-notes';
import { useLiveQuery } from 'dexie-react-hooks';
import { Badge } from '../ui/badge';
import { Link, useNavigate } from 'react-router-dom';

const NoteList = () => {
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const allNotes = useLiveQuery(
        async () => {
            const notes = await db.noteItem.toArray()
            return notes
        }
    )

    const _addNote = (note: NoteItem) => dispatch(addNote(note))
    const _deleteNote = (note: NoteItem) => dispatch(deleteNoteFromState(note.id))
    const _updateNote = (note: NoteItem) => dispatch(updateNote(note))

    const _searchNotes = debounceEvent(
        (searchValue: string) => dispatch(searchNotes(searchValue)),
        100
    )

    const handleNewNote = async () => {
        try {
            const newNoteId = await db.noteItem.add({
                id: v4(),
                content: 'Hello',
                title: 'Title1',
                tags: '',
                created: dayjs().format('YYYY-MM-DD'),
                lastUpdated: dayjs().format('YYYY-MM-DD'),
                isTrash: false,
                isFavorite: false,
            })
            const newNote = await db.noteItem.get(newNoteId);
            if (newNote) {
                _addNote(newNote as NoteItem);
                navigate(`/app/${newNote.id}`);
            } else {
                console.error('Failed to retrieve the new note.');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleNoteClick = (note: NoteItem) => {
        dispatch(setActiveNote(note));
    };


    return (
        <aside className='py-4 border rounded-2xl mx-2 bg-zinc-100 dark:bg-white/5 h-full'>
            <div className='static px-2'>
                <div className="flex items-center justify-between mb-2 px-4">
                    <span className="text-xl font-bold">{LabelText.NOTES}</span>
                    <div>
                        <ButtonMenu action={handleNewNote} side="bottom" variant={'ghost'} size={'icon'} label={LabelText.CREATE_NEW_NOTE}>
                            <NoteAdd24Regular />
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
                {allNotes?.length === 0 ? (
                    <div className='p-4 flex items-center justify-center italic text-muted-foreground text-sm'>No one notes it's here</div>
                ) : (
                    <div className='grid grid-cols-1 gap-2'>
                        {allNotes?.map((item) => (
                            <Link to={`/app/${item.id}`} onClick={() => handleNoteClick(item)} role='button' key={item.id} className='flex items-center justify-between p-4 border rounded-xl bg-white hover:bg-zinc-950/5 dark:bg-transparent hover:dark:bg-zinc-900 shadow-sm' >
                                <div className='flex flex-col'>
                                    {item.tags === '' ? (
                                        null
                                    ) : (
                                        <Badge variant={'secondary'}>{item.tags}</Badge>
                                    )}
                                    <div className='text-md font-medium w-full mt-2'>{item.title}</div>
                                </div>
                                <SettingsMenuNotes />
                            </Link>
                        ))}
                    </div>
                )}
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </aside>
    )
}

export default NoteList;