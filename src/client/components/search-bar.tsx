import React, { useTransition} from "react"
import { Input } from "./ui/input"
import { Loading } from "./global/loading"
import { Search24Filled } from "@fluentui/react-icons"
import { LabelText } from "@/lib/label-text"

interface SearchBarProps {
    searchRef: React.MutableRefObject<HTMLInputElement>
    searchNotes: (searchValues: string) => void
}

const SearchBar = ({ searchRef, searchNotes }: SearchBarProps) => {
    const [isPending] = useTransition()
    return(
        <div className="relative overflow-hidden">
            <Input
                ref={searchRef}
                type="search"
                disabled={isPending}
                placeholder={LabelText.SEARCH_NOTES}
                onChange={(event) =>{
                    event.preventDefault()
                    searchNotes(event.target.value)
                }}
            />
            <div className="absolute flex items-center text-muted-foreground justify-center h-full top-1/2 right-0 w-max -translate-x-2 -translate-y-1/2">
                {isPending ? (
                    <Loading  />
                ) : (
                    <Search24Filled />
                )
                }
            </div>
        </div>
    )
}

export default SearchBar