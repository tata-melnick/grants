import React from "react"
import styles from "./styles.module.css"
import { Filters, Grants } from "../../components"

const Content: React.FC = () => {
    return (
        <div className={styles.content}>
            <Filters />
            <Grants />
        </div>
    )
}

export default Content
