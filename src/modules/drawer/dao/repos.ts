import {Dispatch} from "redux";
import {Action, IRepo, IState} from "../../../redux/searchReducer";
import DrawerController from "./../controller";

// https://api.github.com/search/repositories?sort=stars&q=${state?.searchText}&page=1&per_page=100
// https://gitlab.com/api/v4/projects?search=${state?.searchText}&page=1&per_page=100
// https://api.bitbucket.org/2.0/repositories/${state?.searchText}

export type TSource = "github" | "gitlab" | "bitbucket";

export const getRepos = (input: IState = {
    searchText: "",
    source: "all",
    order: "asc"
}) => {
    return async function (dispatch: Dispatch<Action>) {

        const mapSources = new Map<TSource, any>([
            ["github", `https://api.github.com/search/repositories?q=${input?.searchText}&page=1&per_page=100&order=${input?.order}`],
            ["gitlab", `https://gitlab.com/api/v4/projects?search=${input?.searchText}&page=1&per_page=100`],
            ["bitbucket", `https://api.bitbucket.org/2.0/repositories/${input?.searchText}?page=1&per_page=100`]
        ]);

        dispatch({
            type: "INIT"
        })

        if(!input?.source || input?.source === "all") {
            const sources = Array.from(mapSources?.keys());
            return sources.map(async (source) => {
                await DrawerController.fetchData(source, dispatch, mapSources, input);
            })
        } else {
            await DrawerController.fetchData(input?.source, dispatch, mapSources, input);
        }
    }
}
