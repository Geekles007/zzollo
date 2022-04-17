import React, {memo} from "react";

interface AvatarProps {

}

export const avatarImgStyle = "rounded-full bg-white overflow-hidden mr-4";

const Avatar = ({}: AvatarProps) => {

    return <div className="w-full flex items-center">
        <a href={"https://www.github.com/sanix-darker"} title="By Sanix-darker" className={`${avatarImgStyle} h-12 w-12`}>
            <img src="https://avatars1.githubusercontent.com/u/22576758?s=60&v=4" loading={"lazy"} alt="Author Avatar"/>
        </a>
        <div className="flex flex-col w-9/12 text-white">
            <a href="/" className="">ZZOLLO</a>
            <small className={"text-xs text-stone-400"}>Search open-source projects on github / gitlab / bitbucket.</small>
        </div>
    </div>

}

export default memo(Avatar);
