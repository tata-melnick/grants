import { action, makeAutoObservable, observable } from "mobx"
import { ListGrant } from "../types"
import GRANTS from "../mock/grants.json"

class Grants {
    @observable list: ListGrant = [...GRANTS]
    @observable grant: object = {}

    constructor() {
        makeAutoObservable(this)
    }

    @action setGrants = (arr: ListGrant) => (this.list = [...arr])

    @action setGrant = () => this.list.map((el) => this.grant === el)
}

export default new Grants()
