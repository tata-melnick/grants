import React, { useRef } from "react"
import cn from "classnames-ts"
import styles from "./modal.module.css"

interface IModalProps {
    open?: boolean
    onClose?(): void
    children?: React.ReactNode
    className?: string
}

const Modal: React.FC<IModalProps> = ({
    open,
    onClose,
    className,
    children,
}) => {
    const ref = useRef<HTMLDivElement>(null)

    const missClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) onClose()
    }

    return (
        <div
            onClick={missClick}
            className={cn(styles.wrapper, open && styles.active)}
        >
            <div ref={ref} className={cn(styles.modal, className)}>
                {children}
            </div>
        </div>
    )
}

export default Modal
