import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollArea } from "../ui/scroll-area";
import ButtonMenu from '../primitive/button-menu';
import { addNote, deleteNote, searchNotes, updateNote } from '@/lib/redux/slice/notes';
import { AddSquare24Regular, Filter24Regular } from '@fluentui/react-icons';
import { debounceEvent } from '@/lib/helpers';
import SearchBar from '../search-bar';
import { Link } from 'react-router-dom';
import { LabelText } from '@/lib/label-text';
import { NoteItem } from '@/lib/types';
import { getNotes } from '@/lib/redux/selector';

const NoteList = () => {
    const contextMenuRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const dispatch = useDispatch()

    // const { notes, activeNoteId, activeTagsId, searchValue } = useSelector(getNotes)

    const _addNote = (note: NoteItem) => dispatch(addNote(note))
    const _updateNote = (note: NoteItem) => dispatch(updateNote(note))
    const _searchNotes = debounceEvent(
        (searchValue: string) => dispatch(searchNotes(searchValue)),
        100
    )

    const handleNewNote = () => {

    }

    return (
        <div className="h-full">
            <aside className="p-2 border rounded-2xl mx-2 bg-zinc-100 dark:bg-white/5 h-full">
                <div className='pb-4'>
                    <div className="flex items-center justify-between mb-2 px-4">
                        <span className="text-xl font-bold">Notes</span>
                        <div>
                            <ButtonMenu side="bottom" variant={'ghost'} size={'icon'} label={LabelText.CREATE_NEW_NOTE}>
                                <AddSquare24Regular />
                            </ButtonMenu>
                            <ButtonMenu side="bottom" variant={'ghost'} size={'icon'} label={LabelText.FILTER}>
                                <Filter24Regular />
                            </ButtonMenu>
                        </div>
                    </div>
                    <SearchBar searchRef={searchRef} searchNotes={_searchNotes} />
                </div>
                <ScrollArea className="">
                    <Link to="">
                        <div className="w-full border border-zinc-300 dark:border-muted hover:bg-muted p-3 rounded-xl">
                            sa
                        </div>
                    </Link>
                </ScrollArea>
            </aside>
        </div>
    )
}

export default NoteList;