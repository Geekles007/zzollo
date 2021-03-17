import React, { memo } from "react";
import { IRepository } from "../../../../../../model/IRepository";
import { CustomAspectRatio } from "../repository-list/repository-list-style/default";
import { buildKey } from "../../../../../../utils/unique-key";
import { Column, Link } from "carbon-components-react";
import { RepoContainerImg, RepoLink } from "./repository-item-style/default";

import { LogoGithub24 } from "@carbon/icons-react";

interface RepositoryItemProps {
    repo: IRepository;
    href: string;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({repo, href}: RepositoryItemProps) => {

    return (
        <>
            <Column key={buildKey()} xlg={2} lg={4} md={4} sm={6}>
                <RepoLink href={href} target="_blank">
                    <CustomAspectRatio ratio="2x1">
                        <RepoContainerImg>
                            <LogoGithub24 color="#000" />
                        </RepoContainerImg>
                    </CustomAspectRatio>
                </RepoLink>
            </Column>
        </>
    );

}

export default memo(RepositoryItem);