import {
    action,
    runInAction,
    makeObservable,
    observable,
    autorun,
    computed,
    reaction,
} from "mobx"
import { ActiveFilters, Filters, GrantType, ListGrant } from "../types"
import GRANTS from "../mock/grants.json"
import { ChangeEvent } from "react"
import calendar, { Calendar } from "./calendar"

const defaultFilters: Filters = {
    stage: { title: "Стадия проекта", type: "c", items: new Set<string>() },
    sum: { title: "Сумма гранта", type: "c", items: new Set<string>() },
    legalForm: {
        title: "Правовая форма грантополучателя",
        type: "r",
        items: new Set<string>(),
    },
    region: {
        title: "Регион участия",
        type: "r",
        items: new Set<string>(),
    },
    lots: {
        title: "Направления проекта",
        type: "c",
        items: new Set<string>(),
    },
    ages: {
        title: "Возраст участников",
        type: "r",
        items: new Set<string>(),
    },
    criterion: {
        title: "Отсекающий критерий",
        type: "r",
        items: new Set<string>(),
    },
}

const defaultActiveFilters: ActiveFilters = {
    stage: [],
    sum: [],
    legalForm: [],
    region: [],
    lots: [],
    ages: [],
    criterion: [],
}

class Grants {
    @observable _list: ListGrant = [...GRANTS]
    @observable grant: GrantType | null = null
    @observable filters: Filters = defaultFilters
    @observable activeFilters: ActiveFilters = defaultActiveFilters
    @observable searchValue: string = ""

    @computed get list() {
        let result = this._list
        if (this.activeFilters.stage.length > 0) {
            result = result.filter((el) =>
                this.activeFilters.stage.includes(el.projectStage)
            )
        }
        if (this.activeFilters.sum.length > 0) {
            result = result.filter((el) =>
                this.activeFilters.sum.includes(el.sum)
            )
        }
        if (this.activeFilters.legalForm.length > 0) {
            result = result.filter((el) =>
                this.activeFilters.legalForm.includes(el.legalForm)
            )
        }
        if (this.activeFilters.region.length > 0) {
            result = result.filter((el) =>
                this.activeFilters.region.includes(el.region)
            )
        }
        if (this.activeFilters.lots.length > 0) {
            result = result.filter((el) =>
                el.lots.some((lot) =>
                    this.activeFilters.lots.includes(lot.description)
                )
            )
        }
        if (this.activeFilters.criterion.length > 0) {
            result = result.filter((el) =>
                this.activeFilters.criterion.includes(el.criterion)
            )
        }
        if (this.activeFilters.ages.length > 0) {
            result = result.filter((el) =>
                this.activeFilters.ages.includes(
                    `${el.ages.from} - ${el.ages.to}`
                )
            )
        }
        const { start, end } = this.calendar
        if (start && end) {
            result = result.filter((el) => {
                const from = new Date(el.status.from).getTime()
                const to = new Date(el.status.to).getTime()

                const startTime = start.getTime()
                const endTime = end.getTime()

                return (
                    (from >= startTime && to <= endTime) ||
                    (from >= startTime && from <= endTime) ||
                    (from <= startTime && to >= endTime) ||
                    (to >= startTime && to <= endTime)
                )
            })
        }
        return result
    }

    constructor(private calendar: Calendar) {
        makeObservable(this)

        autorun(() => {
            if (this.list && this.list.length > 0) {
                runInAction(() => {
                    this.list.forEach((grant) => {
                        if (grant.projectStage)
                            this.filters.stage.items.add(grant.projectStage)
                        if (grant.sum) this.filters.sum.items.add(grant.sum)

                        if (grant.legalForm)
                            this.filters.legalForm.items.add(grant.legalForm)
                        if (grant.region)
                            this.filters.region.items.add(grant.region)
                        if (grant.criterion)
                            this.filters.criterion.items.add(grant.criterion)
                        if (grant.lots && grant.lots.length > 0) {
                            grant.lots.forEach((el) => {
                                this.filters.lots.items.add(el.description)
                            })
                        }
                        if (grant.ages) {
                            this.filters.ages.items.add(
                                `${grant.ages.from} - ${grant.ages.to}`
                            )
                        }
                    })
                })
            }
        })

        reaction(
            () => this.searchValue,
            () => {
                if (!this.searchValue) {
                    this._list = [...GRANTS]
                }
            }
        )
    }

    @action setGrant = (id: string | undefined) => {
        this.grant = this.list.find((item) => item.id === id) || null
    }

    @action resetFilters = () => {
        this.activeFilters = defaultActiveFilters
        this.calendar.reset()
    }

    @action changeFilter = (key: string, value: string[]) => {
        this.activeFilters[key] = value
    }

    @action setSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.searchValue = e.target.value
    }

    @action search = () => {
        this._list = this._list.filter((el) =>
            el.name.toLowerCase().includes(this.searchValue.toLowerCase())
        )
    }

    @action clearSearch = () => {
        this.searchValue = ""
    }
}

export default new Grants(calendar)
