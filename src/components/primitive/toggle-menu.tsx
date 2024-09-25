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
    side?: "bottom" | "top" | "right" | "left" | undefined
  }

const ToggleMenu : React.FC<ButtonMenuProps> = ({
    children,
    onClick,
    size,
    label,
    className,
    disabled,
    side
  }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Toggle
                        size={size}
                        className={`rounded-none aspect-square ${className ? className : ''}`}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {children}
                    </Toggle>
                </TooltipTrigger>
                <TooltipContent side={side}>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default ToggleMenu