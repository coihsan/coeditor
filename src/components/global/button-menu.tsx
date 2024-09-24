import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react"

interface ButtonMenuProps {
    children: React.ReactNode
    className?: string
    action?: () => void
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
    size?:  "default" | "sm" | "lg" | "icon" | null | undefined
    label: string
  }

const ButtonMenu : React.FC<ButtonMenuProps> = ({
    children,
    className,
    action,
    variant,
    size,
    label
  }) => {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger>
                    <Button
                        variant={variant}
                        size={size}
                        className={className}
                        onClick={action}
                    >
                        {children}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default ButtonMenu