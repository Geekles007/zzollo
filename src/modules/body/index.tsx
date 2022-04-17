import React, {memo} from "react";
import RepoList from "./children/repo-list";

interface BodyProps {

}

const Body = ({}: BodyProps) => {

    return <div className={"w-full overflow-y-scroll h-screen bg-gray-100 p-4"}>
        <RepoList />
    </div>

}

export default memo(Body);
