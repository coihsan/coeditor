import { Editor } from "@tiptap/react"
import MenuBar from './menu-bar'
import React, { useEffect } from "react"
import MenuNotesSettings from "./menu-notes-settings"
import { useDispatch } from 'react-redux';
import { setEditableEditor } from '@/lib/redux/slice/app';
import { useAppSelector } from '@/lib/redux/hooks';
import { Edit24Regular, Eye24Regular } from "@fluentui/react-icons";
import { LabelText } from "@/lib/label-text";
import ButtonMenu from "../../primitive/button-menu";

type Props = {
    editor: Editor | null,
}
// TODO : This component will be delete
const MenubarOptions: React.FC<Props> = ({ editor }) => {
    const dispatch = useDispatch();
    const editable = useAppSelector((state) => state.appState.editable);

    useEffect(() => {
        if (editable) {
            setEditableEditor(true)
        }
    }, [editable])

    return (
        <header className="h-auto flex items-center flex-nowrap border-b-[1px] border-muted justify-start sticky top-0 w-full z-10">
            <div className="flex items-center">
                <div className="">
                    {editable ? (
                        <ButtonMenu className="rounded-none" variant={'ghost'} size={'default'} label={LabelText.PREVIEW_NOTE} action={() => dispatch(setEditableEditor(false))}>
                            <Eye24Regular />
                        </ButtonMenu>
                    ) : (
                        <ButtonMenu className="rounded-none" variant={'ghost'} size={'default'} label={LabelText.EDIT_NOTE} action={() => dispatch(setEditableEditor(true))}>
                            <Edit24Regular />
                        </ButtonMenu>
                    )
                    }
                </div>
                <div>
                    {editable ? (
                        <>
                            <MenuBar editor={editor} />
                        </>
                    ) : (
                        <>
                            <MenuNotesSettings />
                        </>
                    )
                    }
                </div>
            </div>
        </header>
    )
}
export default MenubarOptions