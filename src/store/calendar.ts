import { action, makeObservable, observable } from "mobx"
import { ChangeEvent } from "react"

const getDate = (value: string): Date =>
    new Date(value.replace(/(\d{2})\/(\d{2})/, (_, p1, p2) => `${p2}/${p1}`))

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
        if (e.target.value.length === 0) this.setStart(null)
        if (e.target.value.length === 10) {
            const date = getDate(e.target.value)
            if (date.toString() !== "Invalid Date") this.setStart(date)
        }
        this.inputStart = e.target.value
    }
    @action handleInputEnd = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) this.setEnd(null)
        if (e.target.value.length === 10) {
            const date = getDate(e.target.value)
            if (date.toString() !== "Invalid Date") this.setEnd(date)
        }
        this.inputEnd = e.target.value
    }
    reset = () => {
        this.start = null
        this.end = null
        this.inputStart = ""
        this.inputEnd = ""
    }
}
export default new Calendar()
