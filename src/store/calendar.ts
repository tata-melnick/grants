import { action, makeObservable, observable } from "mobx"
import { ChangeEvent } from "react"

const formatInputValue = (value: string) => {
    if (value.length > 10) return value.slice(0, -1).replace(/\D/g, "");
    return value.replace(/\D/g, "");
}

export const formatNumbersDate = (value: string) => {
    if (value.length < 2) return value;
    if (value.length === 2) return `${value}/`
    if (value.length > 2 && value.length < 4) return `${value.slice(0, 2)}/${value.slice(2)}`;
    if (value.length === 4) return `${value.slice(0, 2)}/${value.slice(2)}/`;
    return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`
}

export class Calendar {
    @observable start: Date | null = null
    @observable end: Date | null = null
    @observable inputStart: string = ""
    @observable inputEnd: string = ""

    constructor() {
        makeObservable(this)
    }

    @action setStart = (date: Date | null) => {
        this.start = date
    }
    @action setEnd = (date: Date | null) => {
        this.end = date
    }
    @action handleInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        const formatValue = formatInputValue(e.target.value);
        if (formatValue.length === 8) this.setStart(
            new Date(
                formatNumbersDate(formatValue).replace(
                    /(\d{2})\/(\d{2})/,
                    (_, p1, p2) => `${p2}/${p1}`
                )
            )
        )
        this.inputStart = formatValue;
    }
    @action handleInputEnd = (e: ChangeEvent<HTMLInputElement>) => {
        const formatValue = formatInputValue(e.target.value);
        if (formatValue.length === 8) this.setEnd(
            new Date(
                formatNumbersDate(formatValue).replace(
                    /(\d{2})\/(\d{2})/,
                    (_, p1, p2) => `${p2}/${p1}`
                )
            )
        )
        this.inputEnd = formatValue
    }
    reset = () => {
        this.start = null;
        this.end = null;
        this.inputStart = "";
        this.inputEnd = "";
    }
}
export default new Calendar()
