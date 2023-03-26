import styled from "styled-components";
import { TextInput, Button } from "carbon-components-react";
import github from '../../../../../assets/icons/001-github.svg';

const CustomDrawer = styled.div`
    width: 300px;
    background-color: ${({theme}) => theme.bgSecondColor};
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .drawer-content{
        width: 100%;
    }

    .source-link{
        width: 30px;
        height: 30px;
        background-image: url(${github});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    hr{
        margin-top: 20px;
    }

    .mt20{
        margin-top: 20px;
    }
`;

const CustomInput = styled(TextInput)`

`;

export {
    CustomDrawer,
    CustomInput
};
