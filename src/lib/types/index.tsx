export interface NoteItem {
    id: string
    text: string
    created: string
    lastUpdated: string
    category?: string
    favorite?: boolean
  }
  
  export interface CategoryItem {
    id: string
    name: string
  }

  export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>