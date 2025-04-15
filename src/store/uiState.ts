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
        return this.screenType === ScreenType.Tablet
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
        const width = window.outerWidth
        if (width > 1200) {
            this.screenType = ScreenType.Desktop
            return
        }
        if (width > 768 && width <= 1200) {
            this.screenType = ScreenType.Tablet
            return
        }
        if (width > 480 && width <= 768) {
            this.screenType = ScreenType.MobileLandscape
            return
        }
        if (width <= 768) {
            this.screenType = ScreenType.MobilePortrait
            return
        }
    }
}

export default new UiState()
