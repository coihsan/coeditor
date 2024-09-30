import { LabelText } from "@/lib/label-text";
import ButtonMenu from "../primitive/button-menu"
import { Notepad24Regular, Star24Regular, NumberSymbol24Regular, Delete24Regular, Person24Regular } from '@fluentui/react-icons';
import { ModeToggle } from "../global/mode-toggle";

const Sidebar = () => {
    return (
        <aside className="p-2 border-r-[1px] bg-slate-800 text-white border-muted-fourground flex flex-col justify-between h-screen">
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
        </aside>
    )
}
export default Sidebar