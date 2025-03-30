import React from "react"
import styles from "./menu.module.css"
import UiState from "../../store/uiState"
import { CloseIcon } from "../../icons"
import { observer } from "mobx-react-lite"
import ModalMenu from "../../store/modal"
import Button from "../Button"

const Menu: React.FC = observer(() => {
    const { isTablet, isMobile } = UiState
    const { close } = ModalMenu

    return (
        <div className={styles.sections}>
            {isMobile && (
                <Button type="text" onClick={close} className={styles.btnClose}>
                    <CloseIcon />
                </Button>
            )}
            <h3 className={styles.titleSections}>Разделы</h3>
            <ol className={styles.list}>
                <Button link="#briefInfo">
                    <li className={styles.item}>Краткая информация</li>
                </Button>
                <Button link="#description">
                    <li className={styles.item}>Основные сведения о гранте</li>
                </Button>
                <Button link="#requirements">
                    <li className={styles.item}>Требования для участия</li>
                </Button>
            </ol>
            {isTablet && (
                <Button type="outline" className={styles.btn}>
                    Перейти на сайт
                </Button>
            )}
        </div>
    )
})

export default Menu
