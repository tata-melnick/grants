import React from "react"
import styles from "./search.module.css"
import { CloseIcon, SearchIcon } from "../../icons"

const Search: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.search}>
                <div className={styles.img}>
                    <SearchIcon />
                </div>
                <label htmlFor="input" className={styles.searchLb}>
                    <input
                        type="text"
                        id="input"
                        placeholder="Введите название программы"
                    />
                </label>
                <button className={styles.btnClose}>
                    <CloseIcon />
                </button>
            </div>
            <button className={styles.btn}>Искать</button>
        </div>
    )
}

export default Search
