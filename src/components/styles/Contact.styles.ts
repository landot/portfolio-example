import styled from "styled-components";
import { ButtonContainer } from "./Button.styles";
import { HeadingXL } from "./HeadingXL.styles";
import { PageText } from "./PageText.styles";
import { InputContainer } from "./TextField.styles";

export const SendMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${ButtonContainer} {
        margin-top: 32px;
    }
`

export const ContactMessage = styled.div`
    ${HeadingXL} {
        margin-bottom: 36px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.tablet}) {
        display: flex;
        flex-direction: column;
        align-items: center;

        ${PageText} {
            text-align: center;
        }
    }
`

export const ContactWrapper = styled.div`
    position: relative;
    background: ${props => props.theme.colors.lightBlack};
    width: 100dvw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    width: 90%;
    margin: 60px 0;
`

export const ContactContainer = styled.div`
    z-index: 2;
    position: relative;
    padding: 80px 50px 0 50px;
    height: fit-content;
    width: 100%;
    max-width: 1200px;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 20px;

    ${SendMessage} {
        z-index: 2;
        margin-bottom: 90px;
    }

    ${ContactMessage} {
        z-index: 2;
        margin-bottom: 90px;
    }

    ${InputContainer}:not(:first-child) {
        margin-top: 32px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.tablet}) {
        max-width: 450px;
        grid-template-areas:
        "contactMessage"
        "sendMessage";
        grid-template-columns: 1fr; 
    }
`

export const Rings = styled.img`
    position: absolute;
    z-index: 1;
    left: -200px;
    bottom: 200px;
`