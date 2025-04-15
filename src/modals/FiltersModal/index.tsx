import React from "react"
import { Filters, Modal } from "../../components"
import styles from "./filtersModal.module.css"

interface IModalProps {
    open?: boolean
    onClose?(): void
}

const FiltersModal: React.FC<IModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} className={styles.modal}>
            <Filters />
        </Modal>
    )
}

export default FiltersModal
