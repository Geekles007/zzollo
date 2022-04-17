import React, {memo} from "react";
import {avatarImgStyle} from "../../../drawer/children/avatar";
import {FaBitbucket, FaGithub, FaGitlab} from "react-icons/fa";
import {IRepo} from "../../../../redux/searchReducer";
import noAvatar from "./../../../../assets/images/noavatar.png"
import {animationDrawerStyle} from "../../../drawer";

interface RepoItemProps {
    repo: IRepo
}

const badgeStyle = "min-w-0 shadow-md rounded-md text-white text-xs px-2 py-1";
const platformIconStyle = "absolute text-9xl -right-8 -bottom-6 text-gray-200 z-0";

const RepoItem = ({repo}: RepoItemProps) => {

    const selectIcon = () => {
        switch(repo?.source) {
            case "github":
                return <FaGithub className={`${platformIconStyle}`} />
            case "gitlab":
                return <FaGitlab className={`${platformIconStyle}`} />
            case "bitbucket":
                return <FaBitbucket className={`${platformIconStyle}`} />
        }
    }

    return <a href={repo?.link ?? "#"} target={"_blank"} className={`bg-white hover:bg-yellow-100 ${animationDrawerStyle} relative overflow-hidden rounded-md cursor-pointer h-48 shadow-lg px-4 py-2 flex flex-col justify-between`}>
        <div className="flex flex-col z-10">
            <strong>{repo?.name}</strong>
            <p className={"text-xs my-2 text-ellipsis overflow-hidden max-h-12"}>{repo?.description ?? "ras"}</p>
            <div className="flex gap-x-1">
                <div className={`${badgeStyle} bg-yellow-500`}>{repo?.starCount} Stars</div>
                <div className={`${badgeStyle} bg-blue-500`}>{repo?.forksCount} Forks</div>
                <div className={`${badgeStyle} bg-red-500`}>{repo?.issuesCount} Issues</div>
            </div>
        </div>
        <div className="flex items-center z-10">
            <div className={`${avatarImgStyle} mr-2 h-8 w-8`}>
                <img src={repo?.avatarUrl ?? noAvatar} alt="Author"/>
            </div>
            <span className="text-sm truncate">{repo?.ownerName}</span>
        </div>
        {selectIcon()}
    </a>

}

export default memo(RepoItem);
