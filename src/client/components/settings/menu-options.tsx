import { FluentIcon } from "@fluentui/react-icons"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import React, { MouseEventHandler } from "react"

type MenuOptionsProps = {
    handler: MouseEventHandler
    icon: FluentIcon
    label: "Mark as favorites" | "Move to trash" | "Rename"
    useDialog: boolean
}

const Menuoptions : React.FC<MenuOptionsProps> = ({
    handler,
    icon,
    label,
}) => {
    return (
        <DropdownMenuItem onClick={handler} className="flex items-center gap-3">
            <div>{icon}</div>
            <span>{label}</span>
        </DropdownMenuItem>
    )
}

export default Menuoptions