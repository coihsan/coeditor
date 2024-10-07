import { LabelText } from "@/lib/label-text";
import ButtonMenu from "../primitive/button-menu"
import { Notepad24Regular, Star24Regular, NumberSymbol24Regular, Delete24Regular, Settings24Regular } from '@fluentui/react-icons';
import { ModeToggle } from "../global/mode-toggle";
import React from "react";
import {Logo} from "../global/logo";
import { useDispatch, useSelector } from 'react-redux';
import { MenuType } from '@/lib/enums';
import { setActiveMenu } from "@/lib/redux/slice/app";
import { RootState } from "@/lib/redux/store";
import clsx from "clsx";

const SidebarMenu : React.FC = () => {
    const dispatch = useDispatch();
    
    const handleMenuClick = (menu: MenuType) => {
        dispatch(setActiveMenu(menu));
    };

    const isActive = (menu: MenuType) => {
        const activeMenu = useSelector((state: RootState) => state.app.activeMenu);
        return activeMenu === menu;
    };

    return (
        <aside className="flex flex-col items-center gap-2" >
            <Logo className="size-11" />
            <div className="rounded-full px-2 py-4 border-[1px] bg-zinc-800 dark:bg-zinc-900 text-white border-muted-fourground flex flex-col justify-between h-full">
            <div className="grid gap-6">
                <ButtonMenu action={() => handleMenuClick(MenuType.NOTES)} className={clsx(isActive(MenuType.NOTES) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'rounded-full')} side="right" label={LabelText.NOTES} variant={'ghost'} size={'icon'}>
                    <Notepad24Regular />
                </ButtonMenu>
                <ButtonMenu action={() => handleMenuClick(MenuType.TAGS)} className={clsx(isActive(MenuType.TAGS) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'rounded-full')} side="right" label={LabelText.TAGS} variant={'ghost'} size={'icon'}>
                    <NumberSymbol24Regular />
                </ButtonMenu>
                <ButtonMenu action={() => handleMenuClick(MenuType.FAVORITES)} className={clsx(isActive(MenuType.FAVORITES) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'rounded-full')} side="right" label={LabelText.FAVORITES} variant={'ghost'} size={'icon'}>
                    <Star24Regular />
                </ButtonMenu>
                <ButtonMenu action={() => handleMenuClick(MenuType.TRASH)} className={clsx(isActive(MenuType.TRASH) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'rounded-full')} side="right" label={LabelText.TRASH} variant={'ghost'} size={'icon'}>
                    <Delete24Regular />
                </ButtonMenu>
            </div>
                <div className="grid gap-2">
                    <ModeToggle />
                    <ButtonMenu action={() => handleMenuClick(MenuType.SETTINGS)} className={clsx(isActive(MenuType.SETTINGS) ? 'bg-background text-zinc-900 dark:text-background dark:bg-foreground' : '', 'rounded-full')} side="right" label={LabelText.SETTINGS} variant={'ghost'} size={'icon'}>
                        <Settings24Regular />
                    </ButtonMenu>
                </div>
            </div>
        </aside>
    )
}
export default SidebarMenu