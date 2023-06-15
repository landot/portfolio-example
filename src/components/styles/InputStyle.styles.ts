import { css } from "styled-components";

export const TextInputStyle = css`
    background-color: inherit;  
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.222222px;
    color: ${props => props.theme.colors.white};
    margin-left: 24px;
`
