import React, { useTransition} from "react"
import { Input } from "./ui/input"
import { LabelText } from "@/lib/label-text"

interface SearchBarProps {
    searchRef: React.MutableRefObject<HTMLInputElement>
    searchNotes: (searchValues: string) => void
}

const SearchBar = ({ searchRef, searchNotes }: SearchBarProps) => {
    const [isPending] = useTransition()
    return(
        <div>
            <Input
                ref={searchRef}
                type="search"
                className="bg-white dark:bg-background"
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