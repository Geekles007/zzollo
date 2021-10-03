import styled from "styled-components";
import {AspectRatio, Grid} from "carbon-components-react";

const RepoGrid = styled(Grid)`
    padding-top: 30px;
    padding-bottom: 30px;
    
    .card-article {
        margin-top: 1px;
        cursor: pointer;
        height: 320px !important;
        display: flex;
        
        p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
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