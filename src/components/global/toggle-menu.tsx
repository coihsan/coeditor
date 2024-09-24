import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react"
import { Toggle } from "../ui/toggle"

interface ButtonMenuProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    size?:  "default" | "sm" | "lg" | null | undefined
    label: string
    disabled?: any
  }

const ToggleMenu : React.FC<ButtonMenuProps> = ({
    children,
    className,
    onClick,
    size,
    label,
    disabled
  }) => {
    return (
        <TooltipProvider delayDuration={500}>
            <Tooltip>
                <TooltipTrigger>
                    <Toggle
                        size={size}
                        className={className}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {children}
                    </Toggle>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default ToggleMenu