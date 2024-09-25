interface EditorState {
    editable: boolean;
  }

export interface RootState {
    editor: EditorState;
}
