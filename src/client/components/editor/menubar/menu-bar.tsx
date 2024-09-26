import { Editor } from "@tiptap/react"
import React from "react"
import ToggleMenu from "../../primitive/toggle-menu"
import { Code24Filled, CodeBlock24Filled, TextAlignCenter24Filled, TextAlignJustify24Filled, TextAlignLeft24Filled, TextAlignRight24Filled, TextBold24Filled, TextBulletList24Filled, TextHeader124Filled, TextHeader224Filled, TextHeader324Filled, TextItalic24Filled, TextNumberListLtr24Filled, TextQuote24Filled, TextStrikethrough24Filled, TextT24Filled } from "@fluentui/react-icons"
import { LabelMenubar } from "/lib/label-text"

type Props = {
    editor: Editor | null,
}

const MenuBar: React.FC<Props> = ({ editor}) => {
    if (!editor) return null

    return (
            <div
            className="flex items-center w-full flex-nowrap gap-1 h-auto">
                <ToggleMenu size={'sm'} label={LabelMenubar.BOLD} onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    <TextBold24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.ITALIC} onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <TextItalic24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.STRIKE} onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <TextStrikethrough24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.H1}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    <TextHeader124Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.H2}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    <TextHeader224Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.H3}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    <TextHeader324Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.P}
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    <TextT24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.TEXT_ALIGN_LEFT} onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
                    <TextAlignLeft24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.TEXT_ALIGN_CENTER} onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
                    <TextAlignCenter24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.TEXT_ALIGN_RIGHT} onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
                    <TextAlignRight24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.TEXT_ALIGN_JUSTIFY} onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
                    <TextAlignJustify24Filled className="size-5" />
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
                    <Code24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.CODE_BLOCK}
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    <CodeBlock24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.QUOTE}
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    <TextQuote24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.UL}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <TextBulletList24Filled className="size-5" />
                </ToggleMenu>
                <ToggleMenu size={'sm'} label={LabelMenubar.OL}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    <TextNumberListLtr24Filled className="size-5" />
                </ToggleMenu>
            </div>
    )
}
export default MenuBar