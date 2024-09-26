import { LabelText } from "/lib/label-text";
import { Copy24Regular, Delete24Regular, StarAdd24Regular } from "@fluentui/react-icons";
import ButtonMenu from "../../primitive/button-menu";

const MenuNotesSettings = () =>{
    
    return(
        <div className="flex flex-nowrap w-full">
            <ButtonMenu className="rounded-none" variant={'ghost'} size={'default'} label={LabelText.MARK_AS_FAVORITE}>
                <StarAdd24Regular />
            </ButtonMenu>
            <ButtonMenu className="rounded-none" variant={'ghost'} size={'default'} label={LabelText.DELETE}>
                <Delete24Regular />
            </ButtonMenu>
            <ButtonMenu className="rounded-none" variant={'ghost'} size={'default'} label={LabelText.COPY_NOTES}>
                <Copy24Regular />
            </ButtonMenu>
        </div>
    )
}

export default MenuNotesSettings;