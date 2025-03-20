import { action, computed, makeAutoObservable, observable } from "mobx"
import { ScreenType } from "../types"

class UiState {
    @observable screenType: ScreenType = ScreenType.Desktop

    constructor() {
        makeAutoObservable(this)
        window.addEventListener("resize", this.checkWindowSize)
    }

    @computed get isDesktop() {
        return this.screenType === ScreenType.Desktop
    }

    @computed get isTablet() {
        return (
            this.screenType === ScreenType.TabletPortrait ||
            this.screenType === ScreenType.TabletLandscape
        )
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    @action checkWindowSize = (event) => {
        const width = event.target.outerWidth
        if (width > 1000) {
            this.screenType = ScreenType.Desktop
            return
        }
        if (width < 1000 && width > 770) {
            this.screenType = ScreenType.TabletLandscape
            return
        }
        if (width < 770 && width > 480) {
            this.screenType = ScreenType.TabletPortrait
            return
        }
        if (width < 480 && width > 360) {
            this.screenType = ScreenType.MobileLandscape
            return
        }
        if (width < 360) {
            this.screenType = ScreenType.MobilePortrait
            return
        }
    }
}

export default new UiState()
