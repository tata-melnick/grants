import React, { useEffect, useState } from "react"
import styles from "./listGrant.module.css"
import Grant from "./Grant"
import Paginator from "../Paginator"
import { ListGrant } from "../../types"
import Grants from "../../store/grant"
import { observer } from "mobx-react-lite"
import UiState from "../../store/uiState"

let count: number = 3

const ListGrant: React.FC = observer(() => {
    const { list } = Grants
    const { isDesktop, isTablet, isMobile, screenType } = UiState
    const [page, setPage] = useState<number>(0)
    const [grantsOnPage, setGrantsOnPage] = useState<ListGrant>([])

    useEffect(() => {
        if (isDesktop) count = 3
        if (isTablet) count = 4
        if (isMobile) count = 3
        setGrantsOnPage(list.slice(page * count, page * count + count))
    }, [page, list, screenType])

    return (
        <>
            <div className={styles.list}>
                {grantsOnPage &&
                    grantsOnPage.map((item) => (
                        <Grant detail={item} key={item.id} />
                    ))}
            </div>
            <Paginator
                page={page}
                onChange={setPage}
                count={Math.ceil(list.length / count)}
            />
        </>
    )
})

export default ListGrant
