import React from "react"
import styles from "./grant.module.css"
import { GrantType } from "../../../types"

interface IGrantProps {
    detail: GrantType
}

const Grant: React.FC<IGrantProps> = ({ detail }) => {
    const { name, description, provides, size, status } = detail

    return (
        <div className={styles.wrap}>
            <div className={styles.grant}>
                <div className={styles.grantInfo}>
                    <h2 className={styles.titleGrant}>{name}</h2>
                    <p className={styles.textGrant}>{description}</p>
                    <div className={styles.gradient}></div>
                </div>
                <button className={styles.btn}>Подробнее о программе</button>
            </div>
            <div className={styles.info}>
                <div>
                    <h3 className={styles.titleInfo}>Кто оказывает услуги</h3>
                    <p className={styles.textInfo}>{provides}</p>
                </div>
                <div>
                    <h3 className={styles.titleInfo}>Статус конкурса</h3>
                    <p className={styles.textInfo}>{status}</p>
                </div>
                <div>
                    <h3 className={styles.titleInfo}>Размер гранта</h3>
                    <p className={styles.textInfo}>{size}</p>
                </div>
            </div>
        </div>
    )
}

export default Grant
