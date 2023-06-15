import styled from "styled-components";
import { ButtonText, Line, ButtonContainer } from "./Button.styles";
import { NavigationContainer } from "./NavigationMenu.styles";
import { PageText } from "./PageText.styles";

export const Rings = styled.img`
    position: absolute;
    z-index: 1;
    left: -250px;
    top: 80px;
`

export const Circle = styled.img`
    position: absolute;
    width: 130px;
    z-index: 2;
    right: 375px;
    bottom:  75px;

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        right: -100px;
    }
`

export const IntroMessage = styled.div`
    z-index: 2;
    width: 75%;

    ${ButtonText} {
        font-size: 88px;
        line-height: 88px;
        text-transform: capitalize;
    }

    ${Line} {
        height: 6px;
    }

    ${PageText} {
        margin-top: 40px;
        margin-bottom: 66px;
        max-width: 450px;
    }

    ${ButtonContainer} {
        cursor: default;
    }

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        ${ButtonText} {
            font-size: 72px;
            line-height: 72px;
        }
    }

    @media screen and (max-width: ${props => props.theme.viewports.mobile})  {
        ${ButtonText} {
            font-size: 40px;
            line-height: 40px;
        }
    }

`

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 680px;
    margin-bottom: 100px;
    ${NavigationContainer} {
        margin-bottom: 120px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        height: 600px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.mobile})  {
        align-items: center;
        height: fit-content;
    }

`

export const ProfileImage = styled.img`
    position: absolute;
    z-index: 2;
    width: 445px;
    height: 720px;
    right: 0;
    top: -40px;

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        width: 322px;
        height: 600px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.mobile})  {
        width: 174px;
        height: 383px;
        position: relative;
        right: 0;
        top: -100px;
    }

`