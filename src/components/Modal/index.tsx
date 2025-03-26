import React, { useRef } from "react"
import styles from "./modal.module.css"
import { Menu } from "../index"

interface IModalProps {
    open: boolean
    onClose(): void
}

const Modal: React.FC<IModalProps> = ({ open, onClose }) => {
    const ref = useRef<HTMLDivElement>(null)

    const missClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) onClose()
    }

    if (!open) return null

    return (
        <div onClick={missClick} className={styles.wrapper}>
            <div ref={ref} className={styles.modal}>
                <Menu />
            </div>
        </div>
    )
}

export default Modal
