import React from "react"
import styles from "./popup.module.css"
import cn from "classnames-ts"

interface IPopupProps {
    open: boolean
    children?: React.ReactNode
}

const Popup: React.FC<IPopupProps> = ({ children, open }) => {
    return (
        <div className={cn(styles.popup, open === true && styles.popupOpen)}>
            {children}
        </div>
    )
}

export default Popup
