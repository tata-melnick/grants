import React from "react"
import styles from "./search.module.css"

const Search: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.search}>
                <div className={styles.img}>
                    <img src="/public/search.svg" alt="" />
                </div>
                <label htmlFor="input" className={styles.searchLb}>
                    <input
                        type="text"
                        id="input"
                        placeholder="Введите название программы"
                    />
                </label>
                <button className={styles.btnClose}>
                    <img src="/public/close.svg" alt="" />
                </button>
            </div>
            <button className={styles.btn}>Искать</button>
        </div>
    )
}

export default Search
