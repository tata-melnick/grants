import React from "react"
import styles from "./grant.module.css"
import { GrantType } from "../../../types"
import { useNavigate } from "react-router-dom"
import Button from "../../Button"

interface IGrantProps {
    detail: GrantType
}

const Grant: React.FC<IGrantProps> = ({ detail }) => {
    const { id, name, description, provides, sum, status } = detail
    const navigate = useNavigate()

    const goToGrant = () => {
        navigate(`detail/${id}`)
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.grant}>
                <div className={styles.grantInfo}>
                    <h2 className={styles.titleGrant}>{name}</h2>
                    <p className={styles.textGrant}>{description}</p>
                    <div className={styles.gradient}></div>
                </div>
                <Button
                    onClick={goToGrant}
                    type="filled"
                    className={styles.btn}
                >
                    Подробнее о программе
                </Button>
            </div>
            <div className={styles.info}>
                <div className={styles.infoSection}>
                    <h3 className={styles.titleInfo}>Кто оказывает услуги</h3>
                    <p className={styles.textInfo}>{provides}</p>
                </div>
                <div className={styles.infoSection}>
                    <h3 className={styles.titleInfo}>Статус конкурса</h3>
                    <p className={styles.textInfo}>
                        с {status.from} по {status.to}
                    </p>
                </div>
                <div className={styles.infoSection}>
                    <h3 className={styles.titleInfo}>Размер гранта</h3>
                    {sum > "1" ? (
                        <p className={styles.textInfo}>до {sum} млн руб.</p>
                    ) : (
                        <p className={styles.textInfo}>{sum} млн руб.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Grant
