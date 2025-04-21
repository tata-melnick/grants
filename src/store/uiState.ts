import { action, computed, makeAutoObservable, observable } from "mobx"
import { ScreenType } from "../types"

class UiState {
    @observable screenType: ScreenType = ScreenType.Desktop

    constructor() {
        makeAutoObservable(this)
        window.addEventListener("DOMContentLoaded", this.checkWindowSize)
        window.addEventListener("resize", this.checkWindowSize)
    }

    @computed get isDesktop() {
        return this.screenType === ScreenType.Desktop
    }

    @computed get isTablet() {
        return (
            this.screenType === ScreenType.TabletLandscape ||
            this.screenType === ScreenType.TabletPortrait
        )
    }

    @computed get isMobile() {
        return (
            this.screenType === ScreenType.MobileLandscape ||
            this.screenType === ScreenType.MobilePortrait
        )
    }

    @computed get isMobileLandscape() {
        return this.screenType === ScreenType.MobileLandscape
    }

    @computed get isMobilePortrait() {
        return this.screenType === ScreenType.MobilePortrait
    }

    @action checkWindowSize = () => {
        const width = window.innerWidth
        if (width > 1280) {
            this.screenType = ScreenType.Desktop
            return
        }
        if (width <= 1280 && width > 1000) {
            this.screenType = ScreenType.TabletLandscape
            return
        }
        if (width <= 1000 && width > 900) {
            this.screenType = ScreenType.TabletPortrait
            return
        }
        if (width <= 900 && width > 480) {
            this.screenType = ScreenType.MobileLandscape
            return
        }
        if (width <= 480) {
            this.screenType = ScreenType.MobilePortrait
            return
        }
    }
}

export default new UiState()
