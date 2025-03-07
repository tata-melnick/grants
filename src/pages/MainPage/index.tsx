import React from "react"
import styles from "./mainPage.module.css"
import { Filters, Grants } from "../../components"

const MainPage: React.FC = () => {
    return (
        <div className={styles.content}>
            <Filters />
            <Grants />
        </div>
    )
}

export default MainPage
