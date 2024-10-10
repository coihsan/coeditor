import { Editor } from "@tiptap/react";
import { 
    Code16Filled, 
    CodeBlock16Filled, 
    LineHorizontal116Filled, 
    TextAlignCenter16Filled, 
    TextAlignJustifyFilled, 
    TextAlignLeft16Filled, 
    TextAlignRight16Filled, 
    TextBold16Filled,
    TextBulletList16Filled, 
    TextHeader3Lines16Filled, 
    TextHeader1Lines16Regular, 
    TextHeader2Lines16Filled, 
    TextItalic16Filled, 
    TextNumberListLtr16Filled, 
    TextQuote16Filled,
    TextStrikethrough16Filled,
     TextT16Filled 
    } from "@fluentui/react-icons"
import { LabelMenubar } from "./label-text";

export const startNote = `# Welcome to Takenote!

TakeNote is a free, open-source notes app for the web. It is a demo project only, and does not integrate with any database or cloud. Your notes are saved in local storage and will not be permanently persisted, but are available for download.

View the source on [Github](https://github.com/taniarascia/takenote).

## Features

- **Plain text notes** - take notes in an IDE-like environment that makes no assumptions
- **Markdown preview** - view rendered HTML
- **Linked notes** - use \`{{uuid}}\` syntax to link to notes within other notes
- **Syntax highlighting** - light and dark mode available (based on the beautiful [New Moon theme](https://taniarascia.github.io/new-moon/))
- **Keyboard shortcuts** - use the keyboard for all common tasks - creating notes and categories, toggling settings, and other options
- **Drag and drop** - drag a note or multiple notes to categories, favorites, or trash
- **Multi-cursor editing** - supports multiple cursors and other [Codemirror](https://codemirror.net/) options
- **Search notes** - easily search all notes, or notes within a category
- **Prettify notes** - use Prettier on the fly for your Markdown
- **No WYSIWYG** - made for developers, by developers
- **No database** - notes are only stored in the browser's local storage and are available for download and export to you alone
- **No tracking or analytics** - 'nuff said
- **GitHub integration** - self-hosted option is available for auto-syncing to a GitHub repository (not available in the demo)
`
interface TextEditorMenuBarProps {
    icon: any;
    onClick: () => void;
    className?: string;
    active?: boolean;
    label: LabelMenubar
    disabled?: boolean
}

export const TextEditorMenuBar = (editor: Editor): TextEditorMenuBarProps[] =>
    [
        {
            icon: TextBold16Filled,
            label: LabelMenubar.BOLD,
            onClick: () => editor.chain().focus().toggleBold().run(),
            className: editor.isActive('bold') ? 'is-active' : '',
        },
        {
            icon: TextItalic16Filled,
            label: LabelMenubar.ITALIC,
            onClick: () => editor.chain().focus().toggleItalic().run(),
            className: editor.isActive('italic') ? 'is-active' : '',
        },
        {
            icon: TextStrikethrough16Filled,
            label: LabelMenubar.STRIKE,
            onClick: () => editor.chain().focus().toggleStrike().run(),
            className: editor.isActive('strike') ? 'is-active' : '',
        },
        {
            icon: TextHeader1Lines16Regular,
            label: LabelMenubar.H1,
            onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            className: editor.isActive('heading', { level: 1 }) ? 'is-active' : '',
        },
        {
            icon: TextHeader2Lines16Filled,
            label: LabelMenubar.H2,
            onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            className: editor.isActive('heading', { level: 2 }) ? 'is-active' : '',
        },
        {
            icon: TextHeader3Lines16Filled,
            label: LabelMenubar.H3,
            onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            className: editor.isActive('heading', { level: 3 }) ? 'is-active' : '',
        },
        {
            icon: TextT16Filled,
            label: LabelMenubar.P,
            onClick: () => editor.chain().focus().setParagraph().run(),
            className: editor.isActive('paragraph') ? 'is-active' : '',
        },
        {
            icon: TextAlignLeft16Filled,
            label: LabelMenubar.TEXT_ALIGN_LEFT,
            onClick: () => editor.chain().focus().setTextAlign('left').run(),
            className: editor.isActive({ textAlign: 'left' }) ? 'is-active' : '',
        },
        {
            icon: TextAlignCenter16Filled,
            label: LabelMenubar.TEXT_ALIGN_CENTER,
            onClick: () => editor.chain().focus().setTextAlign('center').run(),
            className: editor.isActive({ textAlign: 'center' }) ? 'is-active' : '',
        },
        {
            icon: TextAlignRight16Filled,
            label: LabelMenubar.TEXT_ALIGN_RIGHT,
            onClick: () => editor.chain().focus().setTextAlign('right').run(),
            className: editor.isActive({ textAlign: 'right' }) ? 'is-active' : '',
        },
        {
            icon: TextAlignJustifyFilled,
            label: LabelMenubar.TEXT_ALIGN_JUSTIFY,
            onClick: () => editor.chain().focus().setTextAlign('justify').run(),
            className: editor.isActive({ textAlign: 'justify' }) ? 'is-active' : '',
        },
        {
            icon: Code16Filled,
            label: LabelMenubar.CODE,
            onClick: () => editor.chain().focus().toggleCode().run(),
            className: editor.isActive('code') ? 'is-active' : '',
            disabled: !editor.can().chain().focus().toggleCode().run()
        },
        {
            icon: CodeBlock16Filled,
            label: LabelMenubar.CODE_BLOCK,
            onClick: () => editor.chain().focus().toggleCodeBlock().run(),
            className: editor.isActive('codeBlock') ? 'is-active' : '',
        },
        {
            icon: TextQuote16Filled,
            label: LabelMenubar.QUOTE,
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            className: editor.isActive('blockquote') ? 'is-active' : '',
        },
        {
            icon: TextBulletList16Filled,
            label: LabelMenubar.UL,
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            className: editor.isActive('bulletList') ? 'is-active' : '',
        },
        {
            icon: TextNumberListLtr16Filled,
            label: LabelMenubar.OL,
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            className: editor.isActive('orderedList') ? 'is-active' : '',
        },
        {
            icon: LineHorizontal116Filled,
            label: LabelMenubar.HR,
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
            className: editor.isActive('horizontalRule') ? 'is-active' : '',
        },

    ]