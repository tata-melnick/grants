import { action, makeAutoObservable, observable } from "mobx"
import { GrantType, ListGrant } from "../types"
import GRANTS from "../mock/grants.json"

class Grants {
    @observable list: ListGrant = [...GRANTS]
    @observable grant: GrantType | undefined = undefined

    constructor() {
        makeAutoObservable(this)
    }

    @action setGrants = (arr: ListGrant) => (this.list = [...arr])

    @action setGrant = (id: string | undefined) => {
        this.grant = this.list.find((item) => item.id === id)
    }
}

export default new Grants()
