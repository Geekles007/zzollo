import styled from "styled-components";
import { AspectRatio, Grid } from "carbon-components-react";

const RepoGrid = styled(Grid)`
    padding-top: 30px;
    padding-bottom: 30px;
`;

const CustomAspectRatio = styled(AspectRatio)`
    background-color: #efefef;
    margin-bottom: 30px;
    padding: 10px;
    position: relative;
`;

export {
    CustomAspectRatio,
    RepoGrid
}