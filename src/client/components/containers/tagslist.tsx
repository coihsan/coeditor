import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { searchNotes } from '@/lib/redux/slice/notes';
import { debounceEvent } from '@/lib/helpers';
import SearchBar from '../search-bar';
import { Separator } from '../ui/separator';
import { LabelText } from '@/lib/label-text';
import { ScrollArea } from '../ui/scroll-area';

const Tagslist = () => {
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const dispatch = useDispatch()

    const _searchNotes = debounceEvent(
        (searchValue: string) => dispatch(searchNotes(searchValue)),
        100
    )

    return (
        <aside className='py-4 border rounded-2xl mx-2 bg-zinc-100 dark:bg-white/5 h-full'>
            <div className='static pb-4 px-2'>
                <div className="flex items-center justify-between mb-2 px-4">
                    <span className="text-xl font-bold">{LabelText.TAGS}</span>
                </div>
                <SearchBar searchRef={searchRef} searchQuery={_searchNotes} />
            </div>
            <Separator orientation='horizontal' />
            <ScrollArea className='px-2'>
                {/* content */}
            </ScrollArea>
        </aside>
    )
}

export default Tagslist;