import React from "react"
import styles from "./grant.module.css"
import { GrantType } from "../../../types"
import { useNavigate } from "react-router-dom"

interface IGrantProps {
    detail: GrantType
}

const Grant: React.FC<IGrantProps> = ({ detail }) => {
    const { id, name, description, provides, size, status } = detail
    const navigate = useNavigate()

    const goToProduct = () => navigate(`${"/detail"}?id=${id}`)

    return (
        <div className={styles.wrap}>
            <div className={styles.grant}>
                <div className={styles.grantInfo}>
                    <h2 className={styles.titleGrant}>{name}</h2>
                    <p className={styles.textGrant}>{description}</p>
                    <div className={styles.gradient}></div>
                </div>
                <button onClick={goToProduct} className={styles.btn}>
                    Подробнее о программе
                </button>
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
