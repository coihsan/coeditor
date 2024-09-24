import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"
const NoteLink = () => {
    return (
        <div className="p-2">
            <Input type="search" placeholder="Search" />
            <aside>
                <ScrollArea>
                    <div>
                        <a href="">Notes</a>
                    </div>
                </ScrollArea>
            </aside>
        </div>
    )
}
export default NoteLink