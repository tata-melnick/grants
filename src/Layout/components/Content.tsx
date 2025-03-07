import React from "react"
import styles from "./styles.module.css"
import { MainPage } from "../../pages"

const Content: React.FC = () => {
    return (
        <div className={styles.content}>
            <MainPage />
        </div>
    )
}

export default Content
