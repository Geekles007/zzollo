import React, {memo, useEffect} from "react";
import RepoItem from "../repo-item";
import { useDispatch, useSelector } from 'react-redux';
import {IRepo, ReposState} from "../../../../redux/searchReducer";
import EmptyState from "../empty-state";
import {buildKey} from "../../../../utils/build-key";
import {getRepos} from "../../../drawer/dao/repos";

interface RepoListProps {

}

const RepoList = ({}: RepoListProps) => {
    const repos: any = useSelector((state: ReposState) => state.repos);

    if(!repos?.repos || repos?.repos?.length <= 0) return <EmptyState />;

    return <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 content-start">
        {
            repos?.repos.map((item: IRepo) => {
                return <RepoItem key={buildKey()} repo={item} />
            })
        }
    </div>

}

export default memo(RepoList);
