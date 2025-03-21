import React, { useEffect } from "react"
import styles from "./detailPage.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { BriefInfo, Description, Requirements } from "./components"
import Grants from "../../store/grant"
import UiState from "../../store/uiState"
import { observer } from "mobx-react-lite"
import { ArrowBackIcon } from "../../icons"

const DetailPage: React.FC = observer(() => {
    const { list, grant, setGrant } = Grants
    const { isDesktop } = UiState
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    useEffect(() => {
        if (id !== "") setGrant(id)
    }, [list, id, setGrant])

    const goBack = () => {
        navigate("/")
    }

    return (
        <div className={styles.wrap}>
            {isDesktop && (
                <div className={styles.btnWrap}>
                    <ArrowBackIcon />
                    <button onClick={goBack} className={styles.btn}>
                        Назад
                    </button>
                </div>
            )}
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
