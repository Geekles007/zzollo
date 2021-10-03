import React, { memo } from "react";
import { Grid, Row, Column, Link } from 'carbon-components-react';
import { buildKey } from "../../../../../../utils/unique-key";
import { CustomAspectRatio, RepoGrid } from "./repository-list-style/default";
import RepositoryItem from "../repository-item";

interface RepositoryListProps {
    list: any;
}

const RepositoryList = ({list}: RepositoryListProps) => {

    return (
        <>
            <RepoGrid>
                <Row condensed>
                    {
                        list.map((item: any) => {
                            return (
                                <Column lg={3} key={buildKey()}>
                                    <RepositoryItem repo={item} href={"http://yes.com"} />
                                </Column>
                            )
                        })
                    }
                </Row>
            </RepoGrid>
        </>
    );

}

export default memo(RepositoryList);