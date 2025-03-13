import React from "react"
import styles from "./briefInfo.module.css"

const BriefInfo: React.FC = () => {
    return (
        <div className={styles.sectionInfo}>
            <h3 className={styles.title}>Краткая информация</h3>
            <div className={styles.briefInfo}>
                <div className={styles.condition}>
                    Статус конкурса: Активный
                </div>
                <div className={styles.condition}>Срок выполнения гранта:</div>
                <div className={styles.condition}>Размер гранта:</div>
                <div className={styles.text}>Подача заявок до 13.11.2023</div>
                <div className={styles.text}>12 месяцев</div>
                <div className={styles.text}>3 млн. руб.</div>
            </div>
        </div>
    )
}

export default BriefInfo
