export type Status = {
    from?: string
    to?: string
}

export type Lot = {
    description: string
    subLots?: Array<string>
}

export type Ages = {
    from?: number
    to?: number
}

export type GrantType = {
    id: string
    name: string
    description: string
    provides: string
    status: Status
    endTime: number
    sum: number
    legalForm: string
    projectStage: string
    region: string
    lots: Array<Lot>
    ages: Ages
    criterion: string
}

export type ListGrant = Array<GrantType>
