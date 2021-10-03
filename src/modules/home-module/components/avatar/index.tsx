import React, { memo } from 'react';
import styled from 'styled-components';
import {CustomAvatar} from './avatar-style/default';

const Avatar = () => {
    return (
        <CustomAvatar>
            <a href="github.com/sanix-darker" title="By Sanix-darker">
                <img alt="" src="https://avatars1.githubusercontent.com/u/22576758?s=60&v=4"/>
            </a>
            <div className="naming">
                <a href="/" className="appName">Z0L0</a>
                <small> Search open-source projects on github / gitlab / bitbucket.</small>
            </div>
        </CustomAvatar>
    );
}

export default memo(Avatar);