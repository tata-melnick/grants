import React, { useEffect, useState } from "react"
import UiState from "../../../../store/uiState"
import cn from "classnames-ts"
import styles from "./briefInfo.module.css"
import { GrantType } from "../../../../types"
import { MenuIcon } from "../../../../icons"
import modal from "../../../../store/modal"
import { observer } from "mobx-react-lite"
import Button from "../../../../components/Button"
import { formatDate } from "../../../../utils"

interface IBriefInfoProps {
    grant: GrantType
    id?: string
}

const BriefInfo: React.FC<IBriefInfoProps> = observer(({ grant }) => {
    const { projectStage, status, sum, endTime } = grant
    const { isMobile, isMobileLandscape, isMobilePortrait } = UiState
    const [scroll, setScroll] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                (isMobileLandscape && window.scrollY > 200) ||
                (isMobilePortrait && window.scrollY >300)
            ) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [scroll, isMobileLandscape, isMobilePortrait])

    return (
        <div id="briefInfo">
            <h3 className={styles.title}>Краткая информация</h3>
            <div className={styles.briefInfo}>
                {isMobile && (
                    <div className={cn(styles.condition, styles.conditionOne)}>
                        Статус конкурса: {projectStage}
                    </div>
                )}
                {!isMobile && (
                    <div className={styles.condition}>
                        Статус конкурса:
                        <br />
                        {projectStage}
                    </div>
                )}
                <div className={cn(styles.condition, styles.conditionTwo)}>
                    Срок выполнения гранта:
                </div>
                <div className={cn(styles.condition, styles.conditionThree)}>
                    Размер гранта:
                </div>
                <div className={cn(styles.text, styles.textOne)}>
                    Подача заявок {!isMobile && <br />} до{" "}
                    {formatDate(status.to)}
                </div>
                <div className={cn(styles.text, styles.textTwo)}>
                    {endTime} месяцев
                </div>
                <div className={cn(styles.text, styles.textThree)}>
                    {sum} млн. руб.
                </div>
                {isMobile && (
                    <Button
                        type="text"
                        className={cn(
                            styles.btn,
                            scroll === true && styles.fixed
                        )}
                        onClick={modal.open}
                    >
                        <MenuIcon />
                    </Button>
                )}
            </div>
        </div>
    )
})

export default BriefInfo
