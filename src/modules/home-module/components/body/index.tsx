import React, {memo, useEffect, useState} from 'react';
import { BodyWrapper, NoItemGif } from './body-style/default';
import RepositoryList from './components/repository-list';
import {useFetch} from "../../../../custom-hooks/use-fetch";
import {IState} from "../../../../model/IState";

interface BodyProps {
    state?: IState
}

// https://api.github.com/search/repositories?sort=stars&q=ye&page=1&per_page=100
// https://gitlab.com/api/v4/projects?search=ye&page=1&per_page=100
// https://api.bitbucket.org/2.0/repositories/yes

const Body = ({state}: BodyProps) => {

    const {data: gitlab_list, status: statusLab} = useFetch(`https://gitlab.com/api/v4/projects?search=${state?.searchText}&page=1&per_page=100`);
    const {data: github_list, status: statusHub} = useFetch(`https://api.github.com/search/repositories?sort=stars&q=${state?.searchText}&page=1&per_page=100`);
    const [list, setList] = useState<any>([]);
    // const {data: bitbucket_list} = useFetch(`https://api.bitbucket.org/2.0/repositories/${state?.searchText}`);

    useEffect(() => {
        setList([...(github_list["items"] ?? []), ...(gitlab_list ?? [])])
    }, [state])

    if(statusHub === "fetching" || statusLab === "fetching") {
        return <BodyWrapper>
            <NoItemGif src="https://media1.tenor.com/images/551d452e9eb7377fd4d189bf905a61f3/tenor.gif?itemid=5588862" alt="little cat playing"/>
        </BodyWrapper>
    }

    return (
        <BodyWrapper>
            {
                list && list.length > 0 ?
                    <RepositoryList list={list ?? []} /> :
                    <NoItemGif src="https://media1.tenor.com/images/551d452e9eb7377fd4d189bf905a61f3/tenor.gif?itemid=5588862" alt="little cat playing"/>
            }
        </BodyWrapper>
    );

}

export default memo(Body);