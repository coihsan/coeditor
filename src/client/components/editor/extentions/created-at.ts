import { Node } from '@tiptap/core'
export const CreatedAtExtensions = Node.create({
  name: 'createdAt',

  content: 'text*',

  parseHTML() {
    return [
      { tag: 'createdAt' }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['createdAt', { class: 'text-sm text-muted-foreground pt-2' }, 0]
  }
})
