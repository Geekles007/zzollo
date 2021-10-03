import styled from "styled-components";

const HomeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${({theme}) => theme.bgColor};
`;

export {
    HomeWrapper
};