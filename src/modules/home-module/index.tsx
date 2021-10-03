import React, {memo, useCallback, useState} from 'react';
import Drawer from './components/drawer';
import {HomeWrapper} from './home-style/default';
import {inject} from 'mobx-react';
import {ThemeProvider} from 'styled-components';
import ThemeStore from '../../stores/ThemeStore';
import Body from './components/body';
import {debounce} from "lodash";
import {IState} from "../../model/IState";

const HomePage: React.FC<{}> = () => {

    const [state, setState] = useState<IState>({});

    /**
     * @param event: React.ChangeEvent
     * @param type: string
     */
    const handleChangeOption = debounce(useCallback((event: any, type: string) => {
        setState({
            ...state,
            [type]: event.target.value
        });
    }, [state]), 300)

    return (
        <ThemeProvider theme={ThemeStore.CurrentTheme}>
            <HomeWrapper>
                <Drawer state={state} onChangeHandler={handleChangeOption}/>
                <Body state={state}/>
            </HomeWrapper>
        </ThemeProvider>
    );

}

export default inject("ThemeStore")(memo(HomePage));