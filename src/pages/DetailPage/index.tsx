import React from "react"
import styles from "./detailPage.module.css"
import { Link, useNavigate } from "react-router-dom"
import { BriefInfo, Description, Requirements } from "./components"

const DetailPage: React.FC = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div className={styles.wrap}>
            <div className={styles.btnWrap}>
                <img src="/public/arrow-back.png" alt="" />
                <button onClick={goBack} className={styles.btn}>
                    Назад
                </button>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <BriefInfo />
                    <Description />
                    <Requirements />
                </div>
                <div className={styles.sections}>
                    <h3 className={styles.titleSections}>Разделы</h3>
                    <ul className={styles.list}>
                        <Link to={""}>
                            <li className={styles.item}>Краткая информация</li>
                        </Link>
                        <Link to={""}>
                            <li className={styles.item}>
                                Основные сведения о гранте
                            </li>
                        </Link>
                        <Link to={""}>
                            <li className={styles.item}>
                                Требования для участия
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
