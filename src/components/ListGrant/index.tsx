import React from "react"
import styles from "./listGrant.module.css"
import Grant from "./Grant"
import GRANTS from "../../mock/grants.json"

const ListGrant: React.FC = () => {
    return (
        <div className={styles.list}>
            {GRANTS.map((item) => (
                <Grant detail={item} key={item.id} />
            ))}
        </div>
    )
}

export default ListGrant
