import { Editor } from "@tiptap/react"
import React from "react"
import { BoxIcon, CodeIcon, FontBoldIcon, FontItalicIcon, HeadingIcon, ListBulletIcon, PilcrowIcon, QuoteIcon, StrikethroughIcon, TextAlignCenterIcon, TextAlignJustifyIcon, TextAlignLeftIcon, TextAlignRightIcon } from "@radix-ui/react-icons"
import ToggleMenu from "../global/toggle-menu"

type Props = {
    editor: Editor | null,
}

const MenuBar: React.FC<Props> = ({ editor }) => {
    if (!editor) return null

    return (
        <div className="flex items-center flex-wrap gap-1 h-9">
            <ToggleMenu label="Bold" onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <FontBoldIcon />
            </ToggleMenu>
            <ToggleMenu label="italic" onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <FontItalicIcon />
            </ToggleMenu>
            <ToggleMenu label="Strikethrough" onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <StrikethroughIcon />
            </ToggleMenu>
            <ToggleMenu label="Heading"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                <HeadingIcon />
            </ToggleMenu>
            <ToggleMenu label="Paragraph"
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                <PilcrowIcon />
            </ToggleMenu>
            <ToggleMenu label="Align left" onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
                <TextAlignLeftIcon />
            </ToggleMenu>
            <ToggleMenu label="Align center" onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
                <TextAlignCenterIcon />
            </ToggleMenu>
            <ToggleMenu label="Align right" onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
                <TextAlignRightIcon />
            </ToggleMenu>
            <ToggleMenu label="Justify" onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
                <TextAlignJustifyIcon />
            </ToggleMenu>
            <ToggleMenu label="Code"
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
                <CodeIcon />
            </ToggleMenu>
            <ToggleMenu label="Block code"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                <BoxIcon />
            </ToggleMenu>
            <ToggleMenu label="Blockquote"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                <QuoteIcon />
            </ToggleMenu>
            <ToggleMenu label="Bulleted list"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                <ListBulletIcon />
            </ToggleMenu>
        </div>
    )
}
export default MenuBar