import React, {memo, useState} from "react";
import Avatar from "./children/avatar";
import {FaGithub, FaBars} from "react-icons/fa";
import SearchEngine from "./children/search-engine";

interface DrawerProps {

}

const responsiveDrawerStyle = "mobile-drawer";
const animationDrawerStyle = "ease-in-out duration-500 transition-all";

const Drawer = ({}: DrawerProps) => {

    const [state, setState] = useState<boolean>(false);

    return <>
        <div className={`bg-stone-900 xl:w-96 ${responsiveDrawerStyle} ${animationDrawerStyle} ${state && "toggler"} overflow-y-auto h-screen p-4 flex flex-col`}>
            <Avatar />
            <div className="flex-auto w-full my-4 text-white">
                <h5 className={"text-sm"}>What do you wan to search?</h5>
                <SearchEngine />
            </div>
            <a href="/" className="w-full items-center flex text-white underline">
                <FaGithub size={25} className={"mr-2"} />
                <small>Project link</small>
            </a>
        </div>
        <button className={`absolute left-0 top-0 responsive hidden z-30 bg-black text-white p-2 z-30 ${animationDrawerStyle} ${state && "slide-right"}`} onClick={() => setState(!state)}><FaBars /></button>
    </>

}

export default memo(Drawer);
