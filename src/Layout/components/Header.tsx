import React from "react"
import styles from "./styles.module.css"
import Grants from "../../store/grant"
import { observer } from "mobx-react-lite"
import { useLocation, useNavigate } from "react-router-dom"
import cn from "classnames-ts"
import { ArrowBackIcon } from "../../icons"
import UiState from "../../store/uiState"
import Button from "../../components/Button"

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
            {pathname === "/" ? (
                <>
                    <h1 className={styles.title}>
                        Подбери программу для реализации своего проекта
                    </h1>
                    <div className={styles.img}>
                        <img src="/public/group.png" alt="" />
                    </div>
                </>
            ) : (
                <>
                    {isDesktop && (
                        <div className={styles.wrap}>
                            <h1 className={styles.titleDetail}>
                                {grant?.name}
                            </h1>
                            <div className={styles.providesWrap}>
                                <div className={styles.provides}>
                                    <div>Организатор конкурса:</div>
                                    <div className={styles.text}>
                                        {grant?.provides}
                                    </div>
                                </div>
                                {(isDesktop || isMobilePortrait) && (
                                    <Button
                                        type="outline"
                                        className={styles.btn}
                                    >
                                        Перейти на сайт
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                    {!isDesktop && (
                        <>
                            <div className={styles.btnWrap}>
                                <Button
                                    type="text"
                                    onClick={goBack}
                                    className={styles.btnBack}
                                >
                                    <ArrowBackIcon />
                                    Назад
                                </Button>
                            </div>
                            <div className={styles.wrap}>
                                <h1 className={styles.titleDetail}>
                                    {grant?.name}
                                </h1>
                                <div className={styles.providesWrap}>
                                    <div className={styles.provides}>
                                        <div>Организатор конкурса:</div>
                                        <div className={styles.text}>
                                            {grant?.provides}
                                        </div>
                                    </div>
                                    {(isDesktop || isMobilePortrait) && (
                                        <Button
                                            type="outline"
                                            className={styles.btn}
                                        >
                                            Перейти на сайт
                                        </Button>
                                    )}
                                </div>
                            </div>
                            {(isMobileLandscape) && (
                                <Button type="outline" className={styles.btn}>
                                    Перейти на сайт
                                </Button>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    )
})

export default Header
