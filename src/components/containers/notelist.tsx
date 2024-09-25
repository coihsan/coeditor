import { ScrollArea } from "../ui/scroll-area";

const NoteList = () => {
    return (
        <ScrollArea className="pt-2 h-screen">
            <a href="">
                <div className="w-full bg-muted p-3 rounded-md">
                    Notes
                </div>
            </a>
        </ScrollArea>
    )
}

export default NoteList;