import React, { memo } from "react";
import { IRepository } from "../../../../../../model/IRepository";
import {Column, Grid, Link, Row} from "carbon-components-react";

import {ArrowDownRight32, Link32, LogoGithub24, LogoGithub32} from "@carbon/icons-react";
import DDSCard from "@carbon/ibmdotcom-web-components/es/components-react/card/card";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";

interface RepositoryItemProps {
    repo: any;
    href: string;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({repo, href}: RepositoryItemProps) => {

    return (
        <div className={"card-article"}>
            <DDSCard className={"repo"} href={href}>
                <DDSCardHeading><strong>{repo.name}</strong></DDSCardHeading>
                <p>{repo.description}</p>
                <DDSCardCTAFooter slot={"footer"}>
                    {
                        repo && repo["html_url"] ? <LogoGithub32/> : <Link32 />
                    }
                </DDSCardCTAFooter>
            </DDSCard>
        </div>
    );

}

export default memo(RepositoryItem);