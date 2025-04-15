import React from "react"
import { Modal, Menu } from "../../components"

interface IModalProps {
    open: boolean
    onClose(): void
}

const MenuModal: React.FC<IModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Menu />
        </Modal>
    )
}

export default MenuModal
