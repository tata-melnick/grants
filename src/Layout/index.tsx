import React from "react"
import styles from "./layout.module.css"
import Header from "./components/Header"
import Content from "./components/Content"

const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Content />
        </div>
    )
}

export default Layout
