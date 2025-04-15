import { action, makeObservable, observable } from "mobx"

class Modal {
    @observable modal = false

    constructor() {
        makeObservable(this)
    }

    @action open = () => (this.modal = true)
    @action close = () => (this.modal = false)
}
export default new Modal()
