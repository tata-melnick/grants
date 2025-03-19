import React, { useState } from "react"
import { Calendar as LibCalendar } from "react-calendar"
import { Range, Value } from "react-calendar/src/shared/types"
import cn from "classnames-ts"
import styles from "./calendar.module.css"
import "./reset-styles.css"
import { CalendarIcon } from "../../icons"

interface ICalendarProps {
    type?: "range" | "standard"
    onChange?(value: Date | null): void
    onRangeChange?(value: Range<Date | null>): void
}

const formatDate = (date: Date | null) => {
    if (!date) return "-"

    const { format } = new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })

    return format(date).replaceAll(".", "/")
}

export const Calendar = ({
    type = "standard",
    onChange,
    onRangeChange,
}: ICalendarProps) => {
    const [start, setStart] = useState<Date | null>(null)
    const [end, setEnd] = useState<Date | null>(null)

    const handleChange = (value: Value) => {
        if (Array.isArray(value)) {
            setStart(value[0])
            setEnd(value[1])
            if (onRangeChange) onRangeChange(value)
        } else {
            setStart(value)
            if (onChange) onChange(value)
        }
    }

    return (
        <div className={styles.container}>
            {type === "range" && (
                <div className={styles.rangeContainer}>
                    <div className={styles.range}>
                        <div className={styles.rangeTitle}>Начало периода</div>
                        <div
                            className={cn(
                                styles.rangeDate,
                                start && styles.active
                            )}
                        >
                            <span
                                className={cn(
                                    styles.rangeIcon,
                                    start && styles.rangeIconActive
                                )}
                            >
                                <CalendarIcon />
                            </span>
                            <span className={styles.date}>
                                {formatDate(start)}
                            </span>
                        </div>
                    </div>
                    <div className={styles.range}>
                        <div className={styles.rangeTitle}>Конец периода</div>
                        <div
                            className={cn(
                                styles.rangeDate,
                                end && styles.active,
                                end === null && styles.rangeDateInactive
                            )}
                        >
                            <span
                                className={cn(
                                    styles.rangeIcon,
                                    end && styles.rangeIconActive
                                )}
                            >
                                <CalendarIcon />
                            </span>
                            <span className={styles.date}>
                                {formatDate(end)}
                            </span>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.calendarContainer}>
                <LibCalendar
                    locale="ru-Ru"
                    className={styles.calendar}
                    onChange={handleChange}
                    navigationLabel={({ date, locale }) =>
                        date.toLocaleDateString(locale, { month: "long" })
                    }
                    value={type === "range" ? [start, end] : start}
                    selectRange={type === "range"}
                    returnValue={type === "range" ? "range" : "start"}
                    navigationAriaLabel="polite"
                    showNeighboringMonth={false}
                />
            </div>
        </div>
    )
}
