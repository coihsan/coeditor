import { Editor } from "@tiptap/react"
import React from "react"
import ToggleMenu from "../../primitive/toggle-menu"
import { TextEditorMenuBar } from "@/lib/constants"

type Props = {
    editor: Editor | null,
}

const StaticToolbar: React.FC<Props> = ({ editor }) => {
    if (!editor) return null

    const menuItems = TextEditorMenuBar(editor);

    React.useEffect(() => {
        editor
    }, [editor])

    return (
        <div className="flex flex-wrap items-center h-10 gap-1 px-2 bg-muted dark:bg-zinc-900 shadow-sm border-b-[1px]">
            {menuItems.map((item, index) => (
                <ToggleMenu size={'sm'} label={item.label} onClick={item.onClick} key={index} disabled={item.disabled}
                    className={item.className}
                >
                    <div className="flex items-center justify-center">
                        <item.icon />
                    </div>
                </ToggleMenu>
            ))}
        </div>
    )
}
export default StaticToolbar