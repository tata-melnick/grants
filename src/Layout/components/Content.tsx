import React from "react"
import styles from "./styles.module.css"
import { Filtres, Grants } from "../../components"

const Content: React.FC = () => {
    return (
        <div className={styles.content}>
            <Filtres />
            <Grants />
        </div>
    )
}

export default Content
