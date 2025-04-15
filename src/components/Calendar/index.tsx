import React, { ChangeEvent, KeyboardEventHandler, useState } from "react"
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
    if (!date) return ""

    const { format } = new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })

    return format(date).replaceAll(".", "/")
}

const formatInputValue = (value: string) => {
    let formatted = value
        .replace(/[a-zA-Z]/g, "")
        .replace(/[^0-9a-zA-Z]/, "/")
        .replace(/\s/g, "/")
    if (formatted.length === 2 || formatted.length === 5)
        formatted = formatted + "/"
    return formatted
}

export const Calendar = ({
    type = "standard",
    onChange,
    onRangeChange,
}: ICalendarProps) => {
    const [start, setStart] = useState<Date | null>(null)
    const [end, setEnd] = useState<Date | null>(null)
    const [inputStart, setInputStart] = useState<string>("")
    const [inputEnd, setInputEnd] = useState<string>("")
    const [focused, setFocused] = useState<boolean>(type === "standard")

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

    const handleInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        setInputStart(formatInputValue(e.target.value))
    }

    const handleInputEnd = (e: ChangeEvent<HTMLInputElement>) => {
        setInputEnd(formatInputValue(e.target.value))
    }

    const onEnterStart: KeyboardEventHandler<HTMLLabelElement> = (e) => {
        if (e.key === "Enter") {
            setStart(
                new Date(
                    inputStart.replace(
                        /(\d{2})\/(\d{2})/,
                        (_, p1, p2) => `${p2}/${p1}`
                    )
                )
            )
            setInputStart("")
        }
    }

    const onEnterEnd: KeyboardEventHandler<HTMLLabelElement> = (e) => {
        if (e.key === "Enter") {
            setEnd(
                new Date(
                    inputEnd.replace(
                        /(\d{2})\/(\d{2})/,
                        (_, p1, p2) => `${p2}/${p1}`
                    )
                )
            )
            setInputEnd("")
        }
    }

    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(type === "standard")

    return (
        <div className={styles.container} onMouseLeave={onBlur}>
            {type === "range" && (
                <div className={styles.rangeContainer}>
                    <label className={styles.range} onKeyDown={onEnterStart}>
                        <div className={styles.rangeTitle}>Начало периода</div>
                        <div className={styles.rangeDate}>
                            <span
                                className={cn(
                                    styles.rangeIcon,
                                    start && styles.rangeIconActive
                                )}
                            >
                                <CalendarIcon />
                            </span>
                            <input
                                type="text"
                                className={cn(
                                    styles.date,
                                    start && styles.active
                                )}
                                value={inputStart || formatDate(start)}
                                onInput={handleInputStart}
                                onFocus={onFocus}
                            />
                        </div>
                    </label>
                    <label className={styles.range} onKeyDown={onEnterEnd}>
                        <div className={styles.rangeTitle}>Конец периода</div>
                        <div className={styles.rangeDate}>
                            <span
                                className={cn(
                                    styles.rangeIcon,
                                    end && styles.rangeIconActive
                                )}
                            >
                                <CalendarIcon />
                            </span>
                            <input
                                type="text"
                                className={cn(
                                    styles.date,
                                    end && styles.active
                                )}
                                value={inputEnd || formatDate(end)}
                                onInput={handleInputEnd}
                                onFocus={onFocus}
                            />
                        </div>
                    </label>
                </div>
            )}
            {focused && (
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
            )}
        </div>
    )
}
