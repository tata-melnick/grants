import React from "react"
import styles from "./mainPage.module.css"
import { Filters, Grants } from "../../components"
import { observer } from "mobx-react-lite"
import UiState from "../../store/uiState"
import GrantsState from "../../store/grant"
import Modal from "../../store/modal"
import Button from "../../components/Button"
import { FiltersModal } from "../../modals"

const MainPage: React.FC = observer(() => {
    const { isMobile } = UiState
    const { resetFilters } = GrantsState
    const { modal, open, close } = Modal

    return (
        <div className={styles.content}>
            <div className={styles.filters}>
                <div className={styles.wrap}>
                    <Button
                        type="text"
                        onClick={modal ? close : open}
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
                {isMobile && <FiltersModal open={modal} onClose={close} />}
            </div>
            <Grants />
        </div>
    )
})

export default MainPage
