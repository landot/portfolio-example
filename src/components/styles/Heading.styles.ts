import styled from "styled-components";

export const Heading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 88px;
    line-height: 88px;
    letter-spacing: -2.5px;
    color: ${props => props.theme.colors.white};
    margin: 0;
    
    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        font-size: 72px;
        line-height: 72px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.mobile})  {
        font-size: 40px;
        line-height: 40px;
    }

`