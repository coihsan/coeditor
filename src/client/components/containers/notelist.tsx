import React, { useEffect, useRef } from 'react'
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ButtonMenu from '../primitive/button-menu';
import { addNote, deleteNoteFromState, searchQuery, setActiveNote, updateNote } from '@/lib/redux/slice/notes';
import { Filter24Regular, NoteAdd24Regular, Tag24Filled } from '@fluentui/react-icons';
import SearchBar from '../global/search-bar';
import { LabelText } from '@/lib/label-text';
import { NoteItem } from '@/lib/types';
import { db } from '@/lib/db';
import { Separator } from '../ui/separator';
import { v4 } from 'uuid';
import dayjs from 'dayjs';
import SettingsMenuNotes from '../settings/settings-menu-notes';
import { useLiveQuery } from 'dexie-react-hooks';
import { Badge } from '../ui/badge';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { debounceEvent, getNotesTitle } from "@/lib/helpers"
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import clsx from 'clsx';
import { useToast } from '@/lib/hooks/use-toast';

const NoteList = () => {
    const { toast } = useToast()
    const location = useLocation()
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const navigate = useNavigate()

    const allNotes = useLiveQuery(
        async () => {
            const notes = await db.noteItem.toArray()
            return notes
        }
    )

    // =========================DISPATCH========================

    const dispatch = useAppDispatch()
    const _addNote = (note: NoteItem) => dispatch(addNote(note))
    const _deleteNote = (note: NoteItem) => dispatch(deleteNoteFromState(note.id))
    const _updateNote = (note: NoteItem) => dispatch(updateNote(note))
    const _searchValues = useAppSelector((state: RootState) => state.notes.searchValue)

    const _searchNotes = debounceEvent(
        (searchValue: string) => dispatch(searchQuery(searchValue)),
        100
    )

    const filteredNotes = _searchValues
        ? allNotes?.filter((note) =>
            note.title.toLowerCase().includes(_searchValues))
        : allNotes;

    useEffect(() => {
        if (_searchValues) return
    }, [_searchNotes])


    const handleNewNote = async () => {
        try {
            const newNoteId = await db.noteItem.add({
                id: v4(),
                content: 'Hello',
                title: '',
                tags: 'Document',
                created: dayjs().format('YYYY-MM-DD'),
                lastUpdated: '',
                trash: false,
                boomark: false,
            })
            const newNote = await db.noteItem.get(newNoteId);
            if (newNote) {
                _addNote(newNote as NoteItem);
                toast({
                    title: "Success",
                    description: "New note created successfully",
                })
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
        <aside className='sidebarOption'>
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
            <ScrollArea className='h-full pb-28 px-2'>
                {filteredNotes?.length === 0 ? (
                    <div className='w-full p-4 flex items-center justify-center italic text-muted-foreground text-sm'>No notes it's here</div>
                ) : (
                    <div className='grid grid-cols-1 gap-2'>
                        {filteredNotes?.map((item) => (
                            <Link to={`/app/${item.id}`} onClick={() => handleNoteClick(item)}
                                key={item.id}
                                className={clsx('px-6 flex items-center justify-between py-4 hover:bg-zinc-50 hover:dark:bg-zinc-900 border rounded-xl shadow-sm', (location.pathname == `/app/${item.id}` && `bg-zinc-50 dark:bg-zinc-900`))} >
                                <div className='flex flex-col w-full gap-4'>
                                    <div className='font-medium w-full' aria-label={item.title}>
                                        {getNotesTitle(item.title)}
                                    </div>
                                    {item.tags &&
                                        <div className='flex items-center gap-3'>
                                            <Tag24Filled className='size-4 text-muted-foreground' />
                                            <Badge variant={'outline'}># {item.tags}</Badge>
                                        </div>
                                    }
                                </div>
                                <SettingsMenuNotes />
                            </Link>
                        ))}
                    </div>
                )}
                <ScrollBar className='pl-3' orientation="vertical" />
            </ScrollArea>
        </aside>
    )
}

export default NoteList;