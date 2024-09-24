import { LabelText } from "@/lib/label-text";
import ButtonMenu from "../global/button-menu"
import { Notepad24Regular, Star24Regular, Settings24Regular, NumberSymbol24Regular } from '@fluentui/react-icons';
const Sidebar = () => {
    return (
        <aside className="p-2 border-r-[1px] bg-muted">
            <div className="grid gap-6">
                <ButtonMenu side="right" label={LabelText.NOTES} variant={'ghost'} size={'icon'}>
                    <Notepad24Regular />
                </ButtonMenu>
                <ButtonMenu side="right" label={LabelText.TAGS} variant={'ghost'} size={'icon'}>
                    <NumberSymbol24Regular />
                </ButtonMenu>
                <ButtonMenu side="right" label={LabelText.FAVORITES} variant={'ghost'} size={'icon'}>
                    <Star24Regular />
                </ButtonMenu>
                <ButtonMenu side="right" label={LabelText.SETTINGS} variant={'ghost'} size={'icon'}>
                    <Settings24Regular />
                </ButtonMenu>
            </div>
        </aside>
    )
}
export default Sidebar