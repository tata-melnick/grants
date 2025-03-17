import { action, makeAutoObservable, observable } from "mobx"
import { GrantType, ListGrant } from "../types"
import GRANTS from "../mock/grants.json"

class Grants {
    @observable list: ListGrant = [...GRANTS]
    @observable grant: GrantType | undefined = undefined
    // @observable isGrant: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    @action setGrants = (arr: ListGrant) => (this.list = [...arr])

    @action setGrant = (id: string | undefined) => {
        this.grant = this.list.find((item) => item.id === id)
    }

    // @action setIsGrant = () => (this.isGrant = !this.isGrant)

    //     @action setFilter = (arr: ListGrant) => {
    //        switch ()
    //     }
}

export default new Grants()

export class setIsGrant {}
