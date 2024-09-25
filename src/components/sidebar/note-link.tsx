import { AddSquare24Regular, Settings24Regular } from "@fluentui/react-icons"
import ButtonMenu from "../primitive/button-menu"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"
import { LabelText } from "@/lib/label-text"

const NoteLink = () => {
    return (
        <aside className="bg-muted dark:bg-slate-900 h-screen">
            <div className="p-4">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold">Notes</span>
                <div>
                    <ButtonMenu side="bottom" variant={'ghost'} size={'icon'} label={LabelText.CREATE_NEW_NOTE}>
                        <AddSquare24Regular />
                    </ButtonMenu>
                    <ButtonMenu side="bottom" variant={'ghost'} size={'icon'} label={LabelText.SETTINGS}>
                        <Settings24Regular />
                    </ButtonMenu>
                </div>
            </div>
            <Input className="bg-white dark:bg-transparent" type="search" placeholder="Search..." />
            <ScrollArea className="pt-2">
                <a href="">
                    <div className="w-full bg-muted p-3 rounded-md">
                    Notes
                    </div>
                </a>
            </ScrollArea>
            </div>
        </aside>
    )
}
export default NoteLink