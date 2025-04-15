import React, { KeyboardEventHandler } from "react"
import styles from "./search.module.css"
import { CloseIcon, SearchIcon } from "../../icons"
import Button from "../Button"
import Grants from "../../store/grant"
import { observer } from "mobx-react-lite"

const Search: React.FC = observer(() => {
    const { setSearchValue, searchValue, search, clearSearch } = Grants

    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.code === "Enter") search()
    }

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
                        value={searchValue}
                        onChange={setSearchValue}
                        onKeyDown={handleKeyPress}
                        className={styles.input}
                    />
                </label>
                {searchValue && searchValue.length > 0 && (
                    <Button
                        type="text"
                        className={styles.btnClose}
                        onClick={clearSearch}
                    >
                        <CloseIcon />
                    </Button>
                )}
            </div>
            <Button type="outline" onClick={search} className={styles.btn}>
                Искать
            </Button>
        </div>
    )
})

export default Search
