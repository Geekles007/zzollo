import React, {memo} from "react";
import emptyImg from "./../../../../assets/images/tenor.gif"

interface EmptyStateProps {

}

const EmptyState = ({}: EmptyStateProps) => {

    return <div className={"w-full h-full bg-white flex justify-center items-center"}>
        <img src={emptyImg} alt="empty state cat"/>
    </div>

}

export default memo(EmptyState);
