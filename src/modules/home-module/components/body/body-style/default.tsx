import styled from "styled-components";

const BodyWrapper = styled.div`
    width: calc(100% - 300px);
    background-color: #fff;
    height: 100vh;
    overflow-y: scroll;
    position: relative;
`;

const NoItemGif = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export {
    BodyWrapper,
    NoItemGif
};
