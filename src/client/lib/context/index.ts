import { createContext } from 'react';

interface ContextSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarContext = createContext<ContextSidebarProps>({
  isOpen: false,
  setIsOpen: () => {},
});

interface ContextEditorProps {
  editable: boolean;
  setEditable: (editable: boolean) => void;
}

export const EditorContext = createContext<ContextEditorProps>({
  editable: false,
  setEditable: () => {true},
});

interface ContextSettingsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SettingsContext = createContext<ContextSettingsProps>({
  isOpen: false,
  setIsOpen: () => {},
});

interface ContextMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuContext = createContext<ContextMenuProps>({
  isOpen: false,
  setIsOpen: () => {},
});

interface ContextMenuOptionProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuOptionContext = createContext<ContextMenuOptionProps>({
  isOpen: false,
  setIsOpen: () => {},
});

interface ContextMenuOptionItemProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuOptionItemContext = createContext<ContextMenuOptionItemProps>({
  isOpen: false,
  setIsOpen: () => {}
})

