import React, { memo } from 'react';
import { BodyWrapper, NoItemGif } from './body-style/default';
import RepositoryList from './components/repository-list';

const Body: React.FC<{}> = () => {

    return (
        <BodyWrapper>
            {/* <NoItemGif src="https://media1.tenor.com/images/551d452e9eb7377fd4d189bf905a61f3/tenor.gif?itemid=5588862" alt="little cat playing"/> */}
            <RepositoryList />
        </BodyWrapper>
    );

}

export default memo(Body);