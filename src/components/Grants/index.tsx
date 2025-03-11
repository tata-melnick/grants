import React from "react"
import styles from "./grants.module.css"
import Search from "../Search"
import ListGrant from "../ListGrant"

const Grants: React.FC = () => {
    return (
        <div className={styles.content}>
            <Search />
            <ListGrant />
        </div>
    )
}

export default Grants
