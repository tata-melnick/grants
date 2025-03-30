import React from "react"
import styles from "./mainPage.module.css"
import { Filters, Grants } from "../../components"
import { observer } from "mobx-react-lite"
import UiState from "../../store/uiState"
import GrantsState from "../../store/grant"
import Popup from "../../components/Popup"
import PopupFilters from "../../store/popup"
import Button from "../../components/Button"

const MainPage: React.FC = observer(() => {
    const { isMobile } = UiState
    const { resetFilters } = GrantsState
    const { popup, openPopup, closePopup } = PopupFilters

    return (
        <div className={styles.content}>
            <div className={styles.filters}>
                <div className={styles.wrap}>
                    <Button
                        type="text"
                        onClick={popup ? closePopup : openPopup}
                        className={styles.btnText}
                    >
                        Фильтр
                    </Button>
                    <div className={styles.btnWrap}>
                        <Button
                            type="outline"
                            onClick={resetFilters}
                            className={styles.btn}
                        >
                            Сбросить
                        </Button>
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
