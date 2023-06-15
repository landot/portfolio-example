import styled from "styled-components";
import { Colors } from "../assets/colors";

export const HeadingL = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -1.5px;
    color: ${Colors.white};
    margin: 0;

    @media screen and (max-width: 599px) and (min-width: 0px)  {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -1px;
    }
`