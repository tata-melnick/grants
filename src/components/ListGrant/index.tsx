import React from "react"
import styles from "./listGrant.module.css"
import Grant from "./Grant"

const ListGrant: React.FC = () => {
    return (
        <div className={styles.list}>
            <Grant />
        </div>
    )
}

export default ListGrant
