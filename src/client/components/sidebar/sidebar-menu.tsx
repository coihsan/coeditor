import { Notepad24Regular, NumberSymbol24Regular, Delete24Regular, Settings24Regular, Folder24Regular, Add24Regular, Bookmark24Regular } from '@fluentui/react-icons';
import { ModeToggle } from "../global/mode-toggle";
import React from "react";
import { Logo } from "../global/logo";
import { useDispatch, useSelector } from 'react-redux';
import { MenuType } from '@/lib/enums';
import { setActiveMenu } from "@/lib/redux/slice/app";
import { RootState } from "@/lib/redux/store";
import clsx from "clsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ButtonMenu from '../primitive/button-menu';
import { LabelText } from '@/lib/label-text';
import AddCategoryForm from './add-category-form';
  

const SidebarMenu: React.FC = () => {
    const dispatch = useDispatch();

    const handleMenuClick = (menu: MenuType) => {
        dispatch(setActiveMenu(menu));
    };

    const isActive = (menu: MenuType) => {
        const activeMenu = useSelector((state: RootState) => state.app.activeMenu);
        return activeMenu === menu;
    };

    return (
        <aside className="rounded-2xl px-2 w-1/5 py-4 border-[1px] bg-zinc-800 dark:bg-zinc-900 text-white border-muted-fourground flex flex-col justify-between h-full">
            <div className="flex flex-col w-full gap-2">
                <div className='pb-4 flex items-center pl-4 gap-2 w-full'>
                    <Logo className="size-9 invert" />
                    <span className='text-2xl font-semibold'>Notes</span>
                </div>
                <div className='grid gap-2'>
                    <div role="button" onClick={() => handleMenuClick(MenuType.NOTES)} className={clsx(isActive(MenuType.NOTES) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'sidebarMenu')}>
                        <Notepad24Regular />
                        Notes
                    </div>
                    <div role="button" onClick={() => handleMenuClick(MenuType.TAGS)} className={clsx(isActive(MenuType.TAGS) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'sidebarMenu')}>
                        <NumberSymbol24Regular />
                        Tags
                    </div>
                    <div role="button" onClick={() => handleMenuClick(MenuType.BOOMARK)} className={clsx(isActive(MenuType.BOOMARK) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'sidebarMenu')}>
                        <Bookmark24Regular />
                        Boomark
                    </div>
                    <div role="button" onClick={() => handleMenuClick(MenuType.TRASH)} className={clsx(isActive(MenuType.TRASH) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'sidebarMenu')}>
                        <Delete24Regular />
                        Trash
                    </div>
                </div>
                <div className='w-full'>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <div className='flex items-center justify-between w-full relative border-b'>
                                <AccordionTrigger>
                                    FOLDERS
                                </AccordionTrigger>
                                <ButtonMenu side='right' size={'icon'} variant={'ghost'} label={LabelText.CREATE_NEW_FOLDER}>
                                    <Add24Regular className='size-5' />
                                </ButtonMenu>
                            </div>
                            <AccordionContent className='pt-4'>
                                {/* <AddCategoryForm /> */}
                                <div role='button' className='pl-3 flex items-center gap-3 py-2 rounded-xl bg-muted'>
                                    <Folder24Regular className='size-5' />
                                    Folder 1
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="grid gap-2">
                <div role="button" onClick={() => handleMenuClick(MenuType.SETTINGS)} className={clsx(isActive(MenuType.SETTINGS) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'sidebarMenu')}>
                    <Settings24Regular />
                    Settings
                </div>
                <ModeToggle />
            </div>
        </aside>
    )
}
export default SidebarMenu