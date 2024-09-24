import { Editor } from "@tiptap/react"
import React from "react"
import ToggleMenu from "../global/toggle-menu"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { Code24Regular, CodeBlock24Regular, TextAlignCenter24Regular, TextAlignJustify24Regular, TextAlignLeft24Regular, TextAlignRight24Regular, TextBold24Regular, TextBulletList24Regular, TextHeader124Regular, TextHeader224Regular, TextHeader324Regular, TextItalic24Regular, TextNumberListLtr24Regular, TextQuote24Regular, TextStrikethrough24Regular, TextT24Regular } from "@fluentui/react-icons"
import { LabelMenubar } from "@/lib/label-text"

type Props = {
    editor: Editor | null,
}

const MenuBar: React.FC<Props> = ({ editor }) => {
    if (!editor) return null

    return (
        <ScrollArea className="h-auto">
            <div className="flex items-center flex-nowrap gap-1 h-auto w-auto">
                <ToggleMenu size={'sm'} label={LabelMenubar.BOLD} onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    <TextBold24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.ITALIC} onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <TextItalic24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.STRIKE} onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <TextStrikethrough24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.H1}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    <TextHeader124Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.H2}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    <TextHeader224Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.H3}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    <TextHeader324Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.P}
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    <TextT24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.TEXT_ALIGN_LEFT} onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
                    <TextAlignLeft24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.TEXT_ALIGN_CENTER} onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
                    <TextAlignCenter24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.TEXT_ALIGN_RIGHT} onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
                    <TextAlignRight24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.TEXT_ALIGN_JUSTIFY} onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
                    <TextAlignJustify24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.CODE}
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    <Code24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.CODE_BLOCK}
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    <CodeBlock24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.QUOTE}
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    <TextQuote24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.UL}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <TextBulletList24Regular />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.OL}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    <TextNumberListLtr24Regular />
                </ToggleMenu>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
export default MenuBar