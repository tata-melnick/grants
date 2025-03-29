import React from "react"
import cn from "classnames-ts"
import styles from "./radio.module.css"

interface IRadioProps {
    value: string
    checked: string
    onChange: (value: string) => void
}

const Radio: React.FC<IRadioProps> = ({ value, onChange, checked }) => {
    const handleChange = () => {
        onChange(value)
    }
    return (
        <div className={styles.label}>
            <label className={cn(styles.radio, checked && styles.radioOn)}>
                <input hidden type="checkbox" onChange={handleChange} />
            </label>
            <span className={styles.labelText}>{value}</span>
        </div>
    )
}

export default Radio
