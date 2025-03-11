import { action, makeAutoObservable, observable } from "mobx"
import { ListGrant } from "../types"
import GRANTS from "../mock/grants.json"

class Crants {
    @observable list: ListGrant = [...GRANTS]

    constructor() {
        makeAutoObservable(this)
    }

    @action setAccounts = (arr: ListGrant) => (this.list = [...arr])
}

export default new Crants()
