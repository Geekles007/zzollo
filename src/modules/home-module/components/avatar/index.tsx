import React, { memo } from 'react';
import styled from 'styled-components';
import {CustomAvatar} from './avatar-style/default';

const Avatar = () => {
    return (
        <CustomAvatar>
            <a href="https://github.com/Geekles007" title="By Sanix-darker">
                <img alt="" src="https://avatars.githubusercontent.com/u/24395977?v=4"/>
            </a>
            <div className="naming">
                <a href="/" className="appName">ZZ0L00</a>
                <small> Search open-source projects on github / gitlab / bitbucket.</small>
            </div>
        </CustomAvatar>
    );
}

export default memo(Avatar);
