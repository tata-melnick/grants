import React from "react"
import styles from "./grant.module.css"

const Grant: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.grant}>
                <div className={styles.grantInfo}>
                    <h2 className={styles.titleGrant}>Студенческий стартап</h2>
                    <p className={styles.textGrant}>
                        Программа направлена на выполнение работ студентами по
                        разработке новых товаров, изделий, технологий или услуг
                        с использованием результатов собственных
                        научно-технических и технологических исследований,
                        имеющих потенциал коммерциализации и находящихся на
                        самой ранней стадии развития.
                    </p>
                    <div className={styles.gradient}></div>
                </div>
                <button className={styles.btn}>Подробнее о программе</button>
            </div>
            <div className={styles.info}>
                <div>
                    <h3 className={styles.titleInfo}>Кто оказывает услуги</h3>
                    <p className={styles.textInfo}>
                        ФОНД Содействия Инновациям
                    </p>
                </div>
                <div>
                    <h3 className={styles.titleInfo}>Статус конкурса</h3>
                    <p className={styles.textInfo}>
                        Прием заявок с 22.10.2023 по 25.11.2023
                    </p>
                </div>
                <div>
                    <h3 className={styles.titleInfo}>Размер гранта</h3>
                    <p className={styles.textInfo}>1 млн. руб.</p>
                </div>
            </div>
        </div>
    )
}

export default Grant
