import React from "react"
import styles from "./briefInfo.module.css"
import { GrantType } from "../../../../types"

interface IBriefInfoProps {
    grant: GrantType
    id?: string
}

const BriefInfo: React.FC<IBriefInfoProps> = ({ grant }) => {
    const { projectStage, status, sum, endTime } = grant

    return (
        <div id="briefInfo">
            <h3 className={styles.title}>Краткая информация</h3>
            <div className={styles.briefInfo}>
                <div className={styles.condition}>
                    Статус конкурса:
                    <br />
                    {projectStage}
                </div>
                <div className={styles.condition}>Срок выполнения гранта:</div>
                <div className={styles.condition}>Размер гранта:</div>
                <div className={styles.text}>Подача заявок до {status.to}</div>
                <div className={styles.text}>{endTime} месяцев</div>
                <div className={styles.text}>{sum} млн. руб.</div>
            </div>
        </div>
    )
}

export default BriefInfo
