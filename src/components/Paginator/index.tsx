import React, { useEffect, useState } from "react"
import cn from "classnames-ts"
import styles from "./paginator.module.css"
import rndStr from "../../helpers/randomStr"
import { ArrowIcon } from "../../icons"

export interface IPaginatorProps {
    page: number
    onChange(page: number): void
    count: number
}

const Paginator: React.FC<IPaginatorProps> = ({ page, onChange, count }) => {
    const [pages, setPages] = useState<Array<number>>([])
    const [renderPages, setRenderPages] = useState<Array<number | null>>([])

    const prevPage = () => onChange(page - 1)
    const nextPage = () => onChange(page + 1)

    const handleSetRenderPages = (array: Array<number>) => {
        if (count <= 7) {
            setRenderPages(array)
        } else {
            if (page < 3)
                setRenderPages([...array.slice(0, 6), null, count - 1])
            if (page === 3)
                setRenderPages([...array.slice(0, page + 3), null, count - 1])
            if (page > 3 && page < count - 4)
                setRenderPages([
                    0,
                    null,
                    ...array.slice(page - 2, page + 3),
                    null,
                    count - 1,
                ])
            if (page === count - 1)
                setRenderPages([0, null, ...array.slice(page - 3, count)])
            if (page === count - 2)
                setRenderPages([0, null, ...array.slice(page - 2, count)])
            if (page === count - 3)
                setRenderPages([0, null, ...array.slice(page - 1, count)])
            if (page === count - 4)
                setRenderPages([0, null, ...array.slice(page - 2, count)])
        }
    }

    useEffect(() => {
        const newPages = []
        for (let i = 0; i < count; i++) newPages.push(i)
        handleSetRenderPages(newPages)
        setPages(newPages)
    }, [])

    useEffect(() => {
        if (pages.length) handleSetRenderPages(pages)
    }, [count, page])

    if (!count || count <= 1) return null

    return (
        <div className={styles.container}>
            <span
                className={cn([
                    styles.arrow,
                    page === 0 && styles.chevronButtonDisabled,
                ])}
                onClick={prevPage}
            >
                <ArrowIcon />
            </span>
            {renderPages &&
                renderPages.map((el) => (
                    <span
                        className={cn([
                            styles.button,
                            el === page && styles.buttonActive,
                            el === null && styles.delimiter,
                        ])}
                        key={`page-${el || rndStr()}`}
                        onClick={el !== null ? () => onChange(el) : undefined}
                    >
                        {el !== null ? el + 1 : "..."}
                    </span>
                ))}
            <span
                className={cn([
                    styles.arrow,
                    styles.arrowForward,
                    page === count - 1 && styles.chevronButtonDisabled,
                ])}
                onClick={nextPage}
            >
                <ArrowIcon />
            </span>
        </div>
    )
}

export default Paginator
