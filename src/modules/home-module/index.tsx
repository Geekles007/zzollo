import React, {memo} from 'react';
import Drawer from './components/drawer';
import { HomeWrapper } from './home-style/default';
import { inject } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import ThemeStore from '../../stores/ThemeStore';
import Body from './components/body';

const HomePage: React.FC<{}> = () => {

    return (
        <ThemeProvider theme={ThemeStore.CurrentTheme}>
            <HomeWrapper>
                <Drawer />
                <Body />
            </HomeWrapper>
        </ThemeProvider>
    );

}

export default inject("ThemeStore")(memo(HomePage));