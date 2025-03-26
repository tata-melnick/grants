import React from "react"
import styles from "./menu.module.css"
import UiState from "../../store/uiState"
import { CloseIcon } from "../../icons"
import { observer } from "mobx-react-lite"
import ModalMenu from "../../store/modal"

const Menu: React.FC = observer(() => {
    const { isTablet, isMobile } = UiState
    const { close } = ModalMenu

    return (
        <div className={styles.sections}>
            {isMobile && (
                <button onClick={close} className={styles.btnClose}>
                    <CloseIcon />
                </button>
            )}
            <h3 className={styles.titleSections}>Разделы</h3>
            <ol className={styles.list}>
                <a href={"#briefInfo"}>
                    <li className={styles.item}>Краткая информация</li>
                </a>
                <a href={"#description"}>
                    <li className={styles.item}>Основные сведения о гранте</li>
                </a>
                <a href={"#requirements"}>
                    <li className={styles.item}>Требования для участия</li>
                </a>
            </ol>
            {isTablet && (
                <button className={styles.btn}>Перейти на сайт</button>
            )}
        </div>
    )
})

export default Menu
