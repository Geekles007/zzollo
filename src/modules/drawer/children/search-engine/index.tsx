import React, {ChangeEvent, memo, useCallback, useEffect, useState} from "react";
import platforms from "./../../../../data/platforms.json";
import languages from "./../../../../data/languages.json";
import sortOptions from "./../../../../data/sort-options.json";
import {buildKey} from "../../../../utils/build-key";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../dao/repos";
import {debounce} from "lodash";
import {IState, ReposState} from "../../../../redux/searchReducer";

interface SearchEngineProps {

}

const selectStyle = "w-full h-10 rounded-md mt-2 px-4 py-3 text-black text-sm";

const SearchEngine = ({}: SearchEngineProps) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<IState>({
        searchText: "",
        source: "all"
    });

    useEffect(() => {
        if(state.searchText && state?.searchText !== "") {
            dispatch(getRepos(state));
        }
    }, [state])

    const makeSearch = debounce(useCallback(async (name: string, e: ChangeEvent<any>) => {
        const val = e.target.value;
        if(val) {
            await setState((oldState) => {
                return {
                    ...oldState,
                    [name]: val
                }
            })
        }
    }, [setState]), 300)

    return <form className={"w-full my-4"}>
        <div className="text-sm mb-4">
            <label htmlFor="name">Name</label>
            <input type="text" name={"searchText"} onChange={(e) => makeSearch("searchText", e)}  placeholder={"Enter a repository's name"} className={"w-full rounded-md mt-2 px-4 py-3 text-black text-sm"}/>
        </div>
        <div className="text-sm mb-4">
            <label htmlFor="source">Platforms</label>
            <select className={`${selectStyle}`} name={"source"} onChange={(e) => makeSearch("source", e)}>
                <option value={"all"}>All platforms</option>
                {
                    platforms.map(item => (
                        <option value={item?.name.toLowerCase()} key={item?.name}>{item?.name}</option>
                    ))
                }
            </select>
        </div>
        <div className="text-sm mb-4">
            <label htmlFor="lang">Languages</label>
            <select className={`${selectStyle}`} name={"lang"} onChange={(e) => makeSearch("lang", e)}>
                <option value={"all"}>All languages</option>
                {
                    languages.map(item => (
                        <option value={item.toLowerCase()} key={item}>{item}</option>
                    ))
                }
            </select>
        </div>
        <div className="text-sm mb-4">
            <label htmlFor="sortBy">Sort options</label>
            <select className={`${selectStyle}`} name={"sortBy"} onChange={(e) => makeSearch("sortBy", e)}>
                <option value={"all"}>Any sort options</option>
                <option value={"starCount"}>Sort by stars</option>
                <option value={"forksCount"}>Sort by forks</option>
                <option value={"issuesCount"}>Sort by issues</option>
            </select>
        </div>
        <div className="text-sm mb-4">
            <label htmlFor="name">Order</label>
            <select className={`${selectStyle}`} name={"order"} onChange={(e) => makeSearch("order", e)}>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
        </div>
    </form>

}

export default memo(SearchEngine);
