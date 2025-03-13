import React, { useEffect, useState } from "react"
import styles from "./listGrant.module.css"
import Grant from "./Grant"
import Paginator from "../Paginator"
import { ListGrant } from "../../types"
import Grants from "../../store/grant"
import { observer } from "mobx-react-lite"

const count = 3

const ListGrant: React.FC = observer(() => {
    const { list, grant } = Grants
    const [page, setPage] = useState<number>(0)
    const [grantsOnPage, setGrantsOnPage] = useState<ListGrant>([])

    console.log(grant)

    useEffect(() => {
        setGrantsOnPage(list.slice(page * count, page * count + count))
    }, [page, list])

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
