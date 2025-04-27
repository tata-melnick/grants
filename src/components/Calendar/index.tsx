import React, { useState } from "react"
import { Calendar as LibCalendar } from "react-calendar"
import { Range, Value } from "react-calendar/src/shared/types"
import cn from "classnames-ts"
import styles from "./calendar.module.css"
import "./reset-styles.css"
import { CalendarIcon } from "../../icons"
import calendar from "../../store/calendar"
import { observer } from "mobx-react-lite"
import { formatDate } from "../../utils"
import { InputMask } from "@react-input/mask"

interface ICalendarProps {
    type?: "range" | "standard"
    onChange?(value: Date | null): void
    onRangeChange?(value: Range<Date | null>): void
}

export const Calendar = observer(
    ({ type = "standard", onChange, onRangeChange }: ICalendarProps) => {
        const [focused, setFocused] = useState<boolean>(type === "standard")

        const {
            start,
            end,
            inputStart,
            inputEnd,
            setStart,
            setEnd,
            handleInputStart,
            handleInputEnd,
        } = calendar

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

        const onFocus = () => setFocused(true)
        const onBlur = () => setFocused(type === "standard")

        return (
            <div className={styles.container} onMouseLeave={onBlur}>
                {type === "range" && (
                    <div className={styles.rangeContainer}>
                        <label className={styles.range}>
                            <div className={styles.rangeTitle}>
                                Начало периода
                            </div>
                            <div className={styles.rangeDate}>
                                <span
                                    className={cn(
                                        styles.rangeIcon,
                                        start && styles.rangeIconActive
                                    )}
                                >
                                    <CalendarIcon />
                                </span>
                                <InputMask
                                    mask="dd/mm/yyyy"
                                    replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                    showMask={false}
                                    // @ts-expect-error
                                    className={cn(
                                        styles.date,
                                        start && styles.active
                                    )}
                                    value={
                                        inputStart
                                            ? inputStart
                                            : formatDate(start, "/")
                                    }
                                    onInput={handleInputStart}
                                    onFocus={onFocus}
                                />
                            </div>
                        </label>
                        <label className={styles.range}>
                            <div className={styles.rangeTitle}>
                                Конец периода
                            </div>
                            <div className={styles.rangeDate}>
                                <span
                                    className={cn(
                                        styles.rangeIcon,
                                        end && styles.rangeIconActive
                                    )}
                                >
                                    <CalendarIcon />
                                </span>
                                <InputMask
                                    mask="dd/mm/yyyy"
                                    replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                    showMask={false}
                                    // @ts-expect-error
                                    className={cn(
                                        styles.date,
                                        start && styles.active
                                    )}
                                    value={
                                        inputEnd
                                            ? inputEnd
                                            : formatDate(end, "/")
                                    }
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
                                date.toLocaleDateString(locale, {
                                    month: "long",
                                })
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
)
