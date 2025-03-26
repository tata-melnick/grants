import { action, makeObservable, observable } from "mobx"

class ModalMenu {
    @observable modal = false

    constructor() {
        makeObservable(this)
    }

    @action open = () => (this.modal = true)
    @action close = () => (this.modal = false)
}
export default new ModalMenu()
