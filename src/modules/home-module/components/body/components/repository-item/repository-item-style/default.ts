import styled from "styled-components";
import { Link } from "carbon-components-react";

const RepoContainerImg =  styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const RepoLink = styled(Link)`
    color: #000;

    &:visited{
        color: #000;
    }
`;

export {
    RepoContainerImg,
    RepoLink
};