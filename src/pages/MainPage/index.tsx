import React from "react"
import styles from "./mainPage.module.css"
import { Filters, Grants } from "../../components"
import { observer } from "mobx-react-lite"
import UiState from "../../store/uiState"
import Popup from "../../components/Popup"
import PopupFilters from "../../store/popup"

const MainPage: React.FC = observer(() => {
    const { isMobile } = UiState
    const { popup, openPopup, closePopup } = PopupFilters

    return (
        <div className={styles.content}>
            <div className={styles.filters}>
                <div className={styles.wrap}>
                    <button onClick={openPopup} className={styles.btnText}>
                        Фильтр
                    </button>
                    <div className={styles.btnWrap}>
                        <button onClick={closePopup} className={styles.btn}>
                            Сбросить
                        </button>
                    </div>
                </div>
                {!isMobile && <Filters />}
                {isMobile && (
                    <Popup open={popup}>
                        <Filters />
                    </Popup>
                )}
            </div>
            <Grants />
        </div>
    )
})

export default MainPage
