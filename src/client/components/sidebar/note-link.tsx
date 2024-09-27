import { AddSquare24Regular, Settings24Regular } from "@fluentui/react-icons"
import ButtonMenu from "../primitive/button-menu"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"
import { LabelText } from "@/lib/label-text"
import { Separator } from "../ui/separator"

const NoteLink = () => {
    return (
        <aside className="bg-muted dark:bg-slate-900 h-screen">
            <div className="p-2 sticky">
                <div className="flex items-center justify-between mb-2 px-2">
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
            </div>
            <Separator className="my-2" />
            <ScrollArea className="h-full pb-24">
                <div className="grid gap-2 p-2">
                    {/* note list */}
                    <a href="">
                        <div className="rounded-xl border border-slate-300 dark:border-muted p-4 bg-transparent hover:bg-slate-200 hover:dark:bg-muted">
                            <h1 className="font-medium text-base">Title</h1>
                            <p className="text-sm text-muted-foreground">Description</p>
                        </div>
                    </a>
                </div>
            </ScrollArea>
        </aside>
    )
}
export default NoteLink