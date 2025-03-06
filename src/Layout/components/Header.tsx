import React from "react"
import styles from "./styles.module.css"

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>
                Подбери программу для реализации своего проекта
            </h1>
            <div className={styles.img}>
                <img src="/public/group.png" alt="" />
            </div>
        </div>
    )
}

export default Header
