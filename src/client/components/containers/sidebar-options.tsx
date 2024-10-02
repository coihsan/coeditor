import { AddSquare24Regular, Settings24Regular } from "@fluentui/react-icons"
import ButtonMenu from "../primitive/button-menu"
import { useDispatch } from 'react-redux'
import { ScrollArea } from "../ui/scroll-area"
import { LabelText } from "@/lib/label-text"
import React from "react"
import SearchBar from "../search-bar"
import { debounceEvent } from "@/lib/helpers"
import { searchNotes } from "@/lib/redux/slice/notes"
import { Link } from "react-router-dom"

interface SidebarOptionsProps {
    isOpen?: boolean
    nameContent?: string
    setIsOpen?: (isOpen: boolean) => void
    searchValues?: string
    setSearchValues?: (searchValues: string) => void
    addAction?: () => void
    settingsAction?: () => void
}

const SidebarOptions : React.FC<SidebarOptionsProps> = ({
    isOpen,
    nameContent,
    setIsOpen,
    searchValues,
    setSearchValues,
    addAction,
    settingsAction
}) => {

    const dispatch = useDispatch()
    const searchRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
    
    const _searchNotes = debounceEvent(
        (searchValue: string) => dispatch(searchNotes(searchValue)),
        100
      )

    return (
        <aside className="p-2 border rounded-2xl mx-2 bg-zinc-100 dark:bg-background h-full">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold">{nameContent}</span>
                <div>
                    <ButtonMenu action={addAction} side="bottom" variant={'ghost'} size={'icon'} label={LabelText.CREATE_NEW_NOTE}>
                        <AddSquare24Regular />
                    </ButtonMenu>
                    <ButtonMenu action={settingsAction} side="bottom" variant={'ghost'} size={'icon'} label={LabelText.SETTINGS}>
                        <Settings24Regular />
                    </ButtonMenu>
                </div>
            </div>
            <SearchBar searchRef={searchRef} searchNotes={_searchNotes} />
            <ScrollArea className="pt-2">
                <Link to="">
                    <div className="w-full border border-zinc-300 dark:border-muted hover:bg-muted p-3 rounded-md">
                        {nameContent}
                    </div>
                </Link>
            </ScrollArea>
        </aside>
    )
}
export default SidebarOptions