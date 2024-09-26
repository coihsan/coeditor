import React, { useTransition} from "react"
import { Input } from "./ui/input"
import { Loading } from "./global/loading"
import { Search24Filled } from "@fluentui/react-icons"

interface SearchBarProps {
    searchRef: React.MutableRefObject<HTMLInputElement>
    searchValue: (values: string) => void
}

const SearchBar = ({ searchRef, searchValue }: SearchBarProps) => {
    const [isPending, startTransition] = useTransition()
    return(
        <div className="relative">
            <Input
                ref={searchRef}
                type="search"
                disabled={isPending}
                placeholder="Search"
                onChange={(event) =>{
                    event.preventDefault()
                    searchValue(event.target.value)
                }}
                onDragOver={(event) => event.preventDefault()}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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