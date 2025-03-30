import React from "react"
import styles from "./search.module.css"
import { CloseIcon, SearchIcon } from "../../icons"
import Button from "../Button"

const Search: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.search}>
                <div className={styles.searchIcon}>
                    <SearchIcon />
                </div>
                <label htmlFor="input" className={styles.searchLb}>
                    <input
                        type="text"
                        id="input"
                        placeholder="Введите название программы"
                    />
                </label>
                <Button type="text" className={styles.btnClose}>
                    <CloseIcon />
                </Button>
            </div>
            <Button type="outline" className={styles.btn}>
                Искать
            </Button>
        </div>
    )
}

export default Search
