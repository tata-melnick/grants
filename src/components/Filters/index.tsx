import React from "react"
import styles from "./filters.module.css"
import Checkbox from "../Checkbox"
import Radio from "../Radio"
import { Calendar } from "../Calendar"

const Filters: React.FC = () => {
    return (
        <div className={styles.sections}>
            <div className={styles.section}>
                <h3 className={styles.titleSection}>Стадия проекта</h3>
                <div className={styles.filter}>
                    <Radio />
                </div>
            </div>
            <div className={styles.section}>
                <h3 className={styles.titleSection}>Регион участия</h3>
                <div className={styles.filter}>
                    <Checkbox />
                </div>
            </div>
            <div className={styles.section}>
                <h3 className={styles.titleSection}>Направление проекта</h3>
                <div className={styles.filter}>
                    <Checkbox />
                </div>
            </div>
            <div className={styles.section}>
                <h3 className={styles.titleSection}>Сумма гранта</h3>
                <div className={styles.filter}>
                    <Checkbox />
                </div>
            </div>
            <div className={styles.section}>
                <h3 className={styles.titleSection}>
                    Правовая форма грантополучателя
                </h3>
                <div className={styles.filter}>
                    <Radio />
                </div>
            </div>
            <div className={styles.section}>
                <h3 className={styles.titleSection}>Возраст участников</h3>
                <div className={styles.filter}>
                    <Radio />
                </div>
            </div>
            <div className={styles.section}>
                <h3 className={styles.titleSection}>
                    Только для преподавателей
                </h3>
                <div className={styles.filter}>
                    <Checkbox />
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.titleSection}>Название раздела</h3>
                <Calendar type="range" />
            </div>
        </div>
    )
}

export default Filters
