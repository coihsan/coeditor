import React, {  } from 'react'
import { ScrollArea } from "../ui/scroll-area";
import ButtonMenu from '../primitive/button-menu';
import { AddSquare24Regular, Filter24Regular } from '@fluentui/react-icons';
import SearchBar from '../search-bar';
import { LabelText } from '@/lib/label-text';

type SidebarMenuOptionsProps = {
    searchRef: React.MutableRefObject<HTMLInputElement>,
    labelName: string,
    handleSearch: (searchValue: string) => void
    handleFilter?: () => void
    handleAdd?: () => void
    children: React.ReactNode
}

const SidebarMenuOptions : React.FC<SidebarMenuOptionsProps> = (
    { searchRef, labelName, children, handleSearch, handleFilter, handleAdd }
) => {

    return (
        <div className="h-full">
            <aside className="p-2 border rounded-2xl mx-2 bg-zinc-100 dark:bg-white/5 h-full">
                <div className='pb-4'>
                    <div className="flex items-center justify-between mb-2 px-4">
                        <span className="text-xl font-bold">{labelName}</span>
                        <div>
                            <ButtonMenu action={handleAdd} side="bottom" variant={'ghost'} size={'icon'} label={LabelText.CREATE_NEW_NOTE}>
                                <AddSquare24Regular />
                            </ButtonMenu>
                            <ButtonMenu action={handleFilter} side="bottom" variant={'ghost'} size={'icon'} label={LabelText.FILTER}>
                                <Filter24Regular />
                            </ButtonMenu>
                        </div>
                    </div>
                    <SearchBar searchRef={searchRef} searchQuery={handleSearch} />
                </div>
                <ScrollArea className="">
                    {children}
                </ScrollArea>
            </aside>
        </div>
    )
}

export default SidebarMenuOptions;