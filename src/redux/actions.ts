import {Action, IRepo} from "./searchReducer";

export const searchAction = (repos: IRepo[]): Action => {
    return {
        type: "FETCH_DATA",
        payload: repos
    }
}
