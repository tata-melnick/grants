import { action, makeObservable, observable } from "mobx"

class PopupFilters {
    @observable popup = false

    constructor() {
        makeObservable(this)
    }

    @action openPopup = () => (this.popup = true)
    @action closePopup = () => (this.popup = false)
}
export default new PopupFilters()
