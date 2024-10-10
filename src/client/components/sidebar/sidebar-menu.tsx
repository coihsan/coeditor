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
        <aside className="rounded-2xl px-2 w-1/5 py-4 border-[1px] bg-gray-800 dark:bg-gray-900 text-white border flex flex-col justify-between h-full">
            <div className="flex flex-col w-full gap-2">
                {/* <div className='pb-4 flex items-center pl-4 gap-2 w-full'>
                    <Logo className="size-9 invert" />
                    <span className='text-2xl font-semibold'>Notes</span>
                </div> */}
                <div className='grid gap-1'>
                    <button onClick={() => handleMenuClick(MenuType.NOTES)} className={clsx(isActive(MenuType.NOTES) ? 'bg-gray-900 text-gray-100 dark:bg-gray-800' : '', 'sidebarMenu')}>
                        <Notepad24Regular />
                        Notes
                    </button>
                    <button onClick={() => handleMenuClick(MenuType.TAGS)} className={clsx(isActive(MenuType.TAGS) ? 'bg-gray-900 text-gray-100 dark:bg-gray-800' : '', 'sidebarMenu')}>
                        <NumberSymbol24Regular />
                        Tags
                    </button>
                    <button onClick={() => handleMenuClick(MenuType.BOOMARK)} className={clsx(isActive(MenuType.BOOMARK) ? 'bg-gray-900 text-gray-100 dark:bg-gray-800' : '', 'sidebarMenu')}>
                        <Bookmark24Regular />
                        Boomark
                    </button>
                    <button onClick={() => handleMenuClick(MenuType.TRASH)} className={clsx(isActive(MenuType.TRASH) ? 'bg-gray-900 text-gray-100 dark:bg-gray-800' : '', 'sidebarMenu')}>
                        <Delete24Regular />
                        Trash
                    </button>
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
                <button onClick={() => handleMenuClick(MenuType.SETTINGS)} className={clsx(isActive(MenuType.SETTINGS) ? 'bg-gray-900 text-gray-100 dark:bg-gray-800' : '', 'sidebarMenu')}>
                    <Settings24Regular />
                    Settings
                </button>
                <ModeToggle />
            </div>
        </aside>
    )
}
export default SidebarMenu