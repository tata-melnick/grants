import React from "react"
import styles from "./grants.module.css"
import Search from "../Search"

const Grants: React.FC = () => {
    return (
        <div className={styles.content}>
            <Search />
            {/*<ListGrants />*/}
            {/*<Paginator/>*/}
        </div>
    )
}

export default Grants
