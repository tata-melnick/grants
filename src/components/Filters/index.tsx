import React from "react"
import styles from "./filters.module.css"
import Checkbox from "../Checkbox"
import Radio from "../Radio"

const Filters: React.FC = () => {
    return (
        <div className={styles.content}>
            <div className={styles.wrap}>
                <h2 className={styles.title}>Фильтр</h2>
                <div className={styles.btnWrap}>
                    <button className={styles.btn}>Сбросить</button>
                </div>
            </div>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <h3 className={styles.titleSection}>Название раздела</h3>
                    <div className={styles.filter}>
                        <Checkbox />
                    </div>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.titleSection}>Название раздела</h3>
                    <div className={styles.filter}>
                        <Radio />
                    </div>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.titleSection}>Название раздела</h3>
                </div>
            </div>
        </div>
    )
}

export default Filters
