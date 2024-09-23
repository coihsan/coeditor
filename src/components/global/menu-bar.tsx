import { Editor } from "@tiptap/react"
import React from "react"
import { BoxIcon, CodeIcon, FontBoldIcon, FontItalicIcon, HeadingIcon, ListBulletIcon, PilcrowIcon, QuoteIcon, StrikethroughIcon, TextAlignCenterIcon, TextAlignJustifyIcon, TextAlignLeftIcon, TextAlignRightIcon } from "@radix-ui/react-icons"
import { Toggle } from "../ui/toggle"

type Props = {
    editor: Editor | null,
}

const MenuBar: React.FC<Props> = ({ editor }) => {
    if (!editor) return null

    return (
        <div className="flex items-center flex-wrap gap-1">
            <Toggle onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <FontBoldIcon />
            </Toggle>
            <Toggle onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <FontItalicIcon />
            </Toggle>
            <Toggle onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <StrikethroughIcon />
            </Toggle>
            <Toggle
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                <HeadingIcon />
            </Toggle>
            <Toggle onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                <PilcrowIcon />
            </Toggle>
            <Toggle onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
                <TextAlignLeftIcon />
            </Toggle>
            <Toggle onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
                <TextAlignCenterIcon />
            </Toggle>
            <Toggle onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
                <TextAlignRightIcon />
            </Toggle>
            <Toggle onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
                <TextAlignJustifyIcon />
            </Toggle>
            <Toggle
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
            </Toggle>
            <Toggle
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                <BoxIcon />
            </Toggle>
            <Toggle
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                <QuoteIcon />
            </Toggle>
            <Toggle
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                <ListBulletIcon />
            </Toggle>
        </div>
    )
}
export default MenuBar