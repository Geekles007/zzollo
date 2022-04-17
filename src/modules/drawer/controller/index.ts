import {searchAction} from "../../../redux/actions";
import {Dispatch} from "redux";
import {Action, IState} from "../../../redux/searchReducer";
import * as _ from "lodash";

export type TSource = "github" | "gitlab" | "bitbucket";

class DrawerController {

    fetchData(source: TSource, dispatch: Dispatch<Action>, mapSources: Map<TSource, any>, input: IState) {
        fetch(mapSources.get(source), {
            method: "GET"
        }).then(res => {
            return res.json();
        }).then(async data => {
            const res = await (data?.items ? data?.items : (data?.values && typeof data?.values === "object") ? data?.values : data) ?? [];
            const list = await res.map((item: any) => ({
                id: item?.id ?? item?.uuid,
                name: item?.name ?? "",
                description: item?.description ?? "",
                source: source,
                starCount: item?.stargazers_count ?? item?.star_count,
                forksCount: item?.forks_count ?? item?.forks,
                link: item?.html_url ? item?.html_url : item?.links?.html ? item?.links?.html : item?.web_url,
                issuesCount: item?.open_issues ?? 0,
                avatarUrl: item?.owner?.avatar_url ? item?.owner?.avatar_url : item?.namespace?.avatar_url ? (item?.namespace?.avatar_url?.includes("http") ? item?.namespace?.avatar_url : "https://www.gitlab.com" + item?.namespace?.avatar_url) : item?.links?.avatar?.href,
                ownerName: item?.owner?.display_name ? item?.owner?.display_name : item?.owner?.login ? item?.owner?.login : item?.namespace?.name
            }))
            dispatch(searchAction(input?.sortBy ? _.orderBy(list, [input?.sortBy], [input?.order ?? "asc"]) : list));
            return data;
        })
    }

}

export default new DrawerController();
