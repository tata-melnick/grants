import React, { useEffect } from "react"
import styles from "./detailPage.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { BriefInfo, Description, Requirements } from "./components"
import Grants from "../../store/grant"
import { observer } from "mobx-react-lite"

const DetailPage: React.FC = observer(() => {
    const { list, grant, setGrant } = Grants
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        if (id !== "") setGrant(id)
    }, [list, id, setGrant])

    const goBack = () => navigate("/")

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
                    {grant !== undefined && (
                        <>
                            <BriefInfo grant={grant} />
                            <Description grant={grant} />
                            <Requirements grant={grant} />
                        </>
                    )}
                </div>
                <div className={styles.sections}>
                    <h3 className={styles.titleSections}>Разделы</h3>
                    <ol className={styles.list}>
                        <a href={"#briefInfo"}>
                            <li className={styles.item}>Краткая информация</li>
                        </a>
                        <a href={"#description"}>
                            <li className={styles.item}>
                                Основные сведения о гранте
                            </li>
                        </a>
                        <a href={"#requirements"}>
                            <li className={styles.item}>
                                Требования для участия
                            </li>
                        </a>
                    </ol>
                </div>
            </div>
        </div>
    )
})

export default DetailPage
