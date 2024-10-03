import { Editor, BubbleMenu } from "@tiptap/react"
import React from "react"
import ToggleMenu from "../../primitive/toggle-menu"
import { TextEditorMenuBar } from "@/lib/constants"

type Props = {
    editor: Editor | null,
}

const MenuBar: React.FC<Props> = ({ editor }) => {
    if (!editor) return null

    const menuItems = TextEditorMenuBar(editor);

    React.useEffect(() => {
        editor
    }, [editor])

    return (
        <>
            {editor &&
                <BubbleMenu className="flex flex-wrap items-center gap-1 bg-background dark:bg-zinc-900 shadow-md p-2 rounded-lg border" tippyOptions={{ duration: 100 }} editor={editor}>
                    {menuItems.map((item, index) => (
                        <ToggleMenu size={'sm'} label={item.label} onClick={item.onClick} key={index} disabled={item.disabled}
                            className={item.className}
                        >
                            <div className="size-5">
                                <item.icon />
                            </div>
                        </ToggleMenu>
                    ))}
                </BubbleMenu>}
        </>
    )
}
export default MenuBar