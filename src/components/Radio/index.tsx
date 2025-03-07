import React from "react"
import styles from "./radio.module.css"

const Radio: React.FC = () => {
    return (
        <div className={styles.label}>
            <label htmlFor="huey" className={styles.radio}>
                <input hidden type="radio" id="scales" />
            </label>
            <span className={styles.labelText}>Название фильтра</span>
        </div>
    )
}

export default Radio
