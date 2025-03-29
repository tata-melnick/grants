import React, { ChangeEvent } from "react"
import cn from "classnames-ts"
import styles from "./checkbox.module.css"

interface ICheckboxProps {
    value: string
    checked: boolean
    onChange: (checked: boolean, value: string) => void
}

const Checkbox: React.FC<ICheckboxProps> = ({ value, checked, onChange }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked, value)
    }
    return (
        <div className={styles.label}>
            <label
                className={cn(styles.checkbox, checked && styles.checkboxOn)}
            >
                <input
                    hidden
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
            </label>
            <span className={styles.labelText}>{value}</span>
        </div>
    )
}

export default Checkbox
