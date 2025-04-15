import React, { useEffect } from "react"
import styles from "./detailPage.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { BriefInfo, Description, Requirements } from "./components"
import Grants from "../../store/grant"
import UiState from "../../store/uiState"
import { observer } from "mobx-react-lite"
import { ArrowBackIcon } from "../../icons"
import { Menu } from "../../components"
import ModalMenu from "../../store/modal"
import Button from "../../components/Button"
import { MenuModal } from "../../modals"

const DetailPage: React.FC = observer(() => {
    const { list, grant, setGrant } = Grants
    const { isDesktop, isMobile } = UiState
    const { modal, close } = ModalMenu
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    useEffect(() => {
        if (id !== "") setGrant(id)
    }, [list, id, setGrant])

    const goBack = () => {
        navigate("/")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.wrap}>
            {isDesktop && (
                <div className={styles.btnWrap}>
                    <Button type="text" onClick={goBack}>
                        <ArrowBackIcon />
                        Назад
                    </Button>
                </div>
            )}
            <div className={styles.info}>
                {grant && (
                    <>
                        <BriefInfo grant={grant} />
                        <Description grant={grant} />
                        <Requirements grant={grant} />
                    </>
                )}
            </div>
            {!isMobile && <Menu />}
            <MenuModal open={modal} onClose={close} />
        </div>
    )
})

export default DetailPage
