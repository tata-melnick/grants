import React, { useEffect, useState } from "react"
import styles from "./listGrant.module.css"
import Grant from "./Grant"
import GRANTS from "../../mock/grants.json"
import Paginator from "../Paginator"
import { ListGrant } from "../../types"

interface IListGranProps {
    grants: ListGrant
}

const count = 3

const ListGrant: React.FC<IListGranProps> = ({ grants }) => {
    const [page, setPage] = useState<number>(0)
    const [grantsOnPage, setGrantsOnPage] = useState<ListGrant>([])
    grants = GRANTS

    console.log(grants)

    useEffect(() => {
        setGrantsOnPage(grants.slice(page * count, page * count + count))
    }, [page, grants])

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
                count={Math.ceil(grants.length / count)}
            />
        </>
    )
}

export default ListGrant
