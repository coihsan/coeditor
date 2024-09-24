import { GearIcon, PlusCircledIcon, StarFilledIcon } from "@radix-ui/react-icons"
import ButtonMenu from "./button-menu"

const Sidebar = () => {
    return (
        <aside className="p-2 border-r-[1px] bg-muted">
            <div className="grid gap-6">
                <ButtonMenu label='New notes' variant={'ghost'} size={'icon'}>
                    <PlusCircledIcon width={22} height={22} />
                </ButtonMenu>
                <ButtonMenu label='Favourites' variant={'ghost'} size={'icon'}>
                    <StarFilledIcon width={22} height={22} />
                </ButtonMenu>
                <ButtonMenu label='Settings' variant={'ghost'} size={'icon'}>
                    <GearIcon width={22} height={22} />
                </ButtonMenu>
            </div>
        </aside>
    )
}
export default Sidebar