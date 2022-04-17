export interface IRepo {
    id: string;
    name: string;
    description?: string;
    starCount: number;
    forksCount: number;
    issuesCount?: number;
    ownerName?: string;
    avatarUrl?: string;
    source?: "github" | "gitlab" | "bitbucket";
    link?: string;
}

export type TSourceState = "all" | "github" | "gitlab" | "bitbucket";

export type IState = {
    searchText: string;
    source?: TSourceState;
    order?: "asc" | "desc";
    lang?: string;
    sortBy?: string;
}

export interface ReposState {
    repos: IRepo[],
    input?: IState
}

const initialState = {
    repos: [],
    input: {
        searchText: "",
        source: "all" as TSourceState
    }
}

export type Action = {
    type: string,
    payload?: IRepo[]
}

export const searchReducer = (state: ReposState = initialState, action: Action) => {
    switch(action.type) {
        case "FETCH_DATA":
            let list = new Map<string, IRepo>();
            action.payload?.forEach(item => {
                list.set(item?.id, item);
            })
            return {...state, repos: [...state?.repos, ...(Array.from(list.values()) ?? [])]}
        case "INIT":
            return {repos: []}
        default:
            return state;
    }
}
