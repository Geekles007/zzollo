import {action, observable} from "mobx";
import {makeObservable} from "mobx";
import {darkTheme, lightTheme} from "../theme/Theme";
import {DefaultTheme} from "styled-components";

type TYPE_THEME = "dark" | "light";

class ThemeStore {
    theme: TYPE_THEME = 'light';

    constructor() {
        makeObservable(this, {
            theme: observable,
            setTheme: action,
            switchTheme: action
        });
    }

    get CurrentTheme(): DefaultTheme {
        if (this.theme === "dark") {
            return darkTheme;
        }
        return lightTheme;
    }

    setTheme = (theme: TYPE_THEME): void => {
        this.theme = theme;
    }

    switchTheme = (): void => {
        if (this.theme === "light") {
            this.theme = "dark";
        } else {
            this.theme = "light";
        }
    }

}


export default new ThemeStore();
