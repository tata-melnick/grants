import React, { SyntheticEvent } from "react"
import cn from "classnames-ts"
import styles from "./button.module.css"

interface IButtonProps {
    type?: "filled" | "text" | "outline" | "link"
    submit?: boolean
    link?: string
    className?: string
    children?: React.ReactNode
    onClick?(): void
    handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    className,
    type = "text",
    link,
    submit,
}) => {
    const handleClickLink = (e: SyntheticEvent) => {
        e.preventDefault()
        onClick?.()
    }

    if (link || type === "link")
        return (
            <a
                onClick={onClick ? handleClickLink : undefined}
                href={link}
                className={cn(styles.btnLink, className)}
            >
                {children && children}
            </a>
        )

    return (
        <button
            onClick={onClick}
            type={submit ? "submit" : "button"}
            className={cn(
                styles.btn,
                type === "text" && styles.btnText,
                type === "filled" && styles.btnFilled,
                type === "outline" && styles.btnOutline,
                className
            )}
        >
            {children && children}
        </button>
    )
}

export default Button
