import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import ButtonMenu from '../primitive/button-menu';
import { AddSquare24Regular } from '@fluentui/react-icons';
import { debounceEvent } from '@/lib/helpers';
import SearchBar from '../global/search-bar';
import { LabelText } from '@/lib/label-text';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';

const Boomark = () => {
    const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const dispatch = useDispatch()

    return (
        <aside className='sidebarOption'>
            <div className='static pb-4 px-4'>
                    <span className="text-xl font-bold">{LabelText.BOOMARK}</span>
                {/* <SearchBar searchRef={searchRef} searchQuery={_searchNotes} /> */}
            </div>
            <Separator orientation='horizontal' />
            <ScrollArea className='px-2'>
                {/* content */}
            </ScrollArea>
        </aside>
    )
}

export default Boomark;