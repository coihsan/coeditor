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
import SidebarMenuOptions from '../sidebar/sidebar-menu-options';

const TrashNotes = () => {
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
        <SidebarMenuOptions labelName='Trash' searchRef={searchRef} handleSearch={_searchNotes}>
            List Tags
        </SidebarMenuOptions>
    )
}

export default TrashNotes;