import React, { useTransition} from "react"
import { Input } from "./ui/input"
import { LabelText } from "@/lib/label-text"
import { Search24Regular } from "@fluentui/react-icons"

interface SearchBarProps {
    searchRef: React.MutableRefObject<HTMLInputElement>
    searchNotes: (searchValues: string) => void
}

const SearchBar = ({ searchRef, searchNotes }: SearchBarProps) => {
    const [isPending] = useTransition()
    return(
        <div className="relative ml-auto flex-1 md:grow-0">
            <Search24Regular className="absolute left-2.5 top-2.5 size-5 text-muted-foreground" />
            <Input
                ref={searchRef}
                type="search"
                className="bg-white rounded-xl pl-8 dark:bg-background"
                disabled={isPending}
                placeholder={LabelText.SEARCH_NOTES}
                onChange={(event) =>{
                    event.preventDefault()
                    searchNotes(event.target.value)
                }}
            />
        </div>
    )
}

export default SearchBar