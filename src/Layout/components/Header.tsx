import React from "react"
import styles from "./styles.module.css"
import Grants from "../../store/grant"
import { observer } from "mobx-react-lite"
import { useLocation } from "react-router-dom"

const Header: React.FC = observer(() => {
    const { grant } = Grants
    const { pathname } = useLocation()

    return (
        <div className={styles.header}>
            {pathname !== "/" ? (
                <>
                    <h1>{grant?.name}</h1>
                    <div className={styles.info}>
                        <div className={styles.provides}>
                            <div>Организатор конкурса:</div>
                            <div className={styles.text}>{grant?.provides}</div>
                        </div>
                        <button className={styles.btn}>Перейти на сайт</button>
                    </div>
                </>
            ) : (
                <>
                    <h1 className={styles.title}>
                        Подбери программу для реализации своего проекта
                    </h1>
                    <div className={styles.img}>
                        <img src="/public/group.png" alt="" />
                    </div>
                </>
            )}
        </div>
    )
})

export default Header
