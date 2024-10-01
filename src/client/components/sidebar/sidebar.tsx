import { LabelText } from "@/lib/label-text";
import ButtonMenu from "../primitive/button-menu"
import { Notepad24Regular, Star24Regular, NumberSymbol24Regular, Delete24Regular, Person24Regular } from '@fluentui/react-icons';
import { ModeToggle } from "../global/mode-toggle";
import React from "react";
import {Logo} from "../global/logo";

const Sidebar : React.FC = () => {
    return (
        <aside className="flex flex-col items-center gap-2" >
            <Logo className="size-11" />
            <div className="rounded-full px-2 py-4 border-[1px] bg-zinc-950 dark:bg-zinc-900 text-white border-muted-fourground flex flex-col justify-between h-full">
            <div className="grid gap-6">
                <ButtonMenu className="rounded-lg" side="right" label={LabelText.NOTES} variant={'ghost'} size={'icon'}>
                    <Notepad24Regular />
                </ButtonMenu>
                <ButtonMenu className="rounded-lg" side="right" label={LabelText.TAGS} variant={'ghost'} size={'icon'}>
                    <NumberSymbol24Regular />
                </ButtonMenu>
                <ButtonMenu className="rounded-lg" side="right" label={LabelText.FAVORITES} variant={'ghost'} size={'icon'}>
                    <Star24Regular />
                </ButtonMenu>
                <ButtonMenu className="rounded-lg" side="right" label={LabelText.TRASH} variant={'ghost'} size={'icon'}>
                    <Delete24Regular />
                </ButtonMenu>
            </div>
                <div className="grid gap-2">
                    <ModeToggle />
                    <ButtonMenu className="rounded-lg" side="right" label={LabelText.ACCOUNT} variant={'ghost'} size={'icon'}>
                        <Person24Regular />
                    </ButtonMenu>
                </div>
            </div>
        </aside>
    )
}
export default Sidebar