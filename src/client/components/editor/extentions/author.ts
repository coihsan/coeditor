import { Node } from '@tiptap/core'
export const AuthorExtensions = Node.create({
  name: 'author',

  content: 'text*',

  parseHTML() {
    return [
      { tag: 'author' }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['author', { class: 'text-sm text-muted-foreground pt-2' }, 0]
  }
})
