import React, { useEffect, useState } from "react"
import cn from "classnames-ts"
import styles from "./paginator.module.css"
import rndStr from "../../helpers/randomStr"

export interface IPaginatorProps {
    page: number
    onChange(page: number): void
    count: number
}

const Paginator: React.FC<IPaginatorProps> = ({ page, count, onChange }) => {
    const [pages, setPages] = useState<Array<number>>([])
    const [renderPages, setRenderPages] = useState<Array<number>>([])

    const prevPage = () => onChange(page - 1)
    const nextPage = () => onChange(page + 1)

    const handleSetRenderPages = (array: Array<number>) => {
        if (count <= 10) {
            setRenderPages(array)
        } else {
            if (page < 3) setRenderPages([...array.slice(0, 4), 0, count - 1])
            if (page === 3)
                setRenderPages([...array.slice(0, page + 3), 0, count - 1])
            if (page > 3 && page < count - 4)
                setRenderPages([
                    0,
                    0,
                    ...array.slice(page - 2, page + 3),
                    0,
                    count - 1,
                ])
            if (page === count - 1)
                setRenderPages([0, 0, ...array.slice(page - 3, count)])
            if (page === count - 2)
                setRenderPages([0, 0, ...array.slice(page - 2, count)])
            if (page === count - 3)
                setRenderPages([0, 0, ...array.slice(page - 1, count)])
            if (page === count - 4)
                setRenderPages([0, 0, ...array.slice(page - 2, count)])
        }
    }

    useEffect(() => {
        const newPages = []
        for (let i = 0; i < count; i++) newPages.push(i)
        handleSetRenderPages(newPages)
        setPages(newPages)
    }, [count])

    useEffect(() => {
        if (pages.length) handleSetRenderPages(pages)
    }, [count, pages])

    if (!count || count <= 1) return null

    return (
        <div className={styles.container}>
            <span
                className={cn([
                    styles.arrow,
                    { [styles.chevronButtonDisabled]: page === 0 },
                ])}
                onClick={prevPage}
            >
                <img src="/public/arrow.svg" alt="" />
            </span>
            <span className={styles.wrap}>
                {renderPages &&
                    renderPages.map((el) => (
                        <span
                            className={cn([
                                styles.button,
                                el === page && styles.buttonActive,
                                el === null && styles.delimiter,
                            ])}
                            key={`page-${el || rndStr()}`}
                            onClick={
                                el !== null ? () => onChange(el) : undefined
                            }
                        >
                            {el !== null ? el + 1 : "..."}
                        </span>
                    ))}
            </span>
            <span
                className={cn([
                    styles.arrow,
                    styles.arrowForward,
                    { [styles.chevronButtonDisabled]: page === count - 1 },
                ])}
                onClick={nextPage}
            >
                <img src="/public/arrow.svg" alt="" />
            </span>
        </div>
    )
}

export default Paginator
