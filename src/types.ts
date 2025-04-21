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
    sum: string
    legalForm: string
    projectStage: string
    region: string
    lots: Array<Lot>
    ages: Ages
    criterion: string
}

export type Filter = {
    title: string
    type: "c" | "r"
    items: Set<string>
}

export type Filters = {
    stage: Filter
    sum: Filter
    legalForm: Filter
    region: Filter
    lots: Filter
    ages: Filter
    criterion: Filter
}

export type ActiveFilters = {
    stage: string[]
    sum: string[]
    legalForm: string[]
    region: string[]
    lots: string[]
    ages: string[]
    criterion: string[]
}

export enum ScreenType {
    Desktop = "Desktop",
    TabletPortrait = "TabletPortrait",
    TabletLandscape = "TabletLandscape",
    MobilePortrait = "MobilePortrait",
    MobileLandscape = "MobileLandscape",
}

export type ListGrant = Array<GrantType>
