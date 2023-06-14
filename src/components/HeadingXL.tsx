import styled from "styled-components";

export const HeadingXL = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 88px;
    line-height: 88px;
    letter-spacing: -2.5px;
    color: #FFFFFF;
    margin: 0;

    @media screen and (max-width: 599px) and (min-width: 0px)  {
        font-size: 40px;
        line-height: 40px;
    }

    @media screen and (max-width: 800px) and (min-width: 600px)  {
        font-size: 72px;
        line-height: 72px;
    }
`