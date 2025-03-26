import React from "react"
import styles from "./styles.module.css"
import Grants from "../../store/grant"
import { observer } from "mobx-react-lite"
import { useLocation, useNavigate } from "react-router-dom"
import cn from "classnames-ts"
import { ArrowBackIcon } from "../../icons"
import UiState from "../../store/uiState"

const Header: React.FC = observer(() => {
    const { grant } = Grants
    const { isDesktop, isMobilePortrait, isMobileLandscape } = UiState
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }

    return (
        <div
            className={cn(
                styles.header,
                pathname === "/" && styles.headerMain,
                pathname !== "/" && styles.headerDetail
            )}
        >
            {pathname !== "/" ? (
                <>
                    {!isDesktop && (
                        <div className={styles.btnWrap}>
                            <ArrowBackIcon />
                            <button onClick={goBack} className={styles.btnBack}>
                                Назад
                            </button>
                        </div>
                    )}
                    <div className={styles.wrap}>
                        <h1 className={styles.titleDetail}>{grant?.name}</h1>
                        <div className={styles.providesWrap}>
                            <div className={styles.provides}>
                                <div>Организатор конкурса:</div>
                                <div className={styles.text}>
                                    {grant?.provides}
                                </div>
                            </div>
                            {(isDesktop || isMobilePortrait) && (
                                <button className={styles.btn}>
                                    Перейти на сайт
                                </button>
                            )}
                        </div>
                    </div>
                    {isMobileLandscape && (
                        <button className={styles.btn}>Перейти на сайт</button>
                    )}
                </>
            ) : (
                <>
                    <h1 className={styles.title}>
                        Подбери программу для реализации своего проекта
                    </h1>
                    <div className={styles.img}>
                        <img src="/public/group.png" alt="" />
                    </div>
                </>
            )}
        </div>
    )
})

export default Header
