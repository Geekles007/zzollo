import styled from "styled-components";

const CustomAvatar = styled.div`
    display: flex;
    align-items: center;
    color: #fff;

    img{
        height: 60px;
        width: 60px;
        margin-right: 10px;
    }

    .naming{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .appName{
            font-size: 2em;
            color: #fff
        }

        small{
            text-align: left;
            font-size: .9em;
        }
    }
`;

export {
    CustomAvatar
}