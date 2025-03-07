import React from "react"
import styles from "./checkbox.module.css"

const Checkbox: React.FC = () => {
    return (
        <div className={styles.label}>
            <label htmlFor="huey" className={styles.checkbox}>
                <input hidden type="checkbox" id="scales" />
            </label>
            <span className={styles.labelText}>Название фильтра</span>
        </div>
    )
}

export default Checkbox
