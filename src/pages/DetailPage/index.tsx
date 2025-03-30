import React, { useEffect } from "react"
import styles from "./detailPage.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { BriefInfo, Description, Requirements } from "./components"
import Grants from "../../store/grant"
import UiState from "../../store/uiState"
import { observer } from "mobx-react-lite"
import { ArrowBackIcon } from "../../icons"
import { Menu, Modal } from "../../components"
import ModalMenu from "../../store/modal"
import Button from "../../components/Button"

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

    return (
        <div className={styles.wrap}>
            {isDesktop && (
                <div className={styles.btnWrap}>
                    <ArrowBackIcon />
                    <Button type="text" onClick={goBack}>
                        Назад
                    </Button>
                </div>
            )}
            <div className={styles.content}>
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
            </div>
            <Modal open={modal} onClose={close} />
        </div>
    )
})

export default DetailPage
