export type GrantType = {
    id: string
    name: string
    description: string
    provides: string
    status: string
    size: string
}

export type ListGrant = Array<GrantType>
