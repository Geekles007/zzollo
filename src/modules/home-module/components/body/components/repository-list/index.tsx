import React, { memo } from "react";
import { Grid, Row, Column, Link } from 'carbon-components-react';
import { buildKey } from "../../../../../../utils/unique-key";
import { CustomAspectRatio, RepoGrid } from "./repository-list-style/default";
import RepositoryItem from "../repository-item";

const RepositoryList: React.FC<{}> = () => {

    return (
        <>
            <RepoGrid>
                <Row>
                    {
                        [1,2,3,4,5].map(item => {
                            return (
                                <RepositoryItem repo={{}} href={"http://yes.com"} />
                            )
                        })
                    }
                </Row>
            </RepoGrid>
        </>
    );

}

export default memo(RepositoryList);