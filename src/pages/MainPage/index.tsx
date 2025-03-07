import React from "react"
import styles from "./mainPage.module.css"
import { Filters, GrantList } from "../../components"

const MainPage: React.FC = () => {
    return (
        <div className={styles.content}>
            <Filters />
            <GrantList />
        </div>
    )
}

export default MainPage
