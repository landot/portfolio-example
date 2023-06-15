import { useState } from "react";
import styled from "styled-components";
import { Button, ButtonContainer  } from "./Button";
import { HeadingXL } from "./HeadingXL";
import { NavigationMenu } from "./NavigationMenu";
import { Text } from "./Text";
import { InputContainer, TextField } from "./TextField";
import { SectionBreak } from "./SectionBreak";
import { TextAreaField } from "./TextAreaField";
import rings from "../assets/images/pattern-rings.svg";


const SendMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${ButtonContainer} {
        margin-top: 32px;
    }
`

const ContactMessage = styled.div`
    ${HeadingXL} {
        margin-bottom: 36px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.tablet}) {
        display: flex;
        flex-direction: column;
        align-items: center;

        ${Text} {
            text-align: center;
        }
    }
`

const ContactWrapper = styled.div`
    position: relative;
    background: ${props => props.theme.colors.lightBlack};
    width: 100dvw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    width: 90%;
    margin: 60px 0;
`

const ContactContainer = styled.div`
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

const Rings = styled.img`
    position: absolute;
    z-index: 1;
    left: -200px;
    bottom: 200px;
`



export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <ContactWrapper>
            <ContactContainer>
                    <ContactMessage>
                        <HeadingXL>Contact</HeadingXL>
                        <Text>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</Text>
                    </ContactMessage>
                    <SendMessage>
                        <TextField placeholder={"NAME"} hasValidationError={false} value={name} handleChange={setName} />
                        <TextField placeholder={"EMAIL"} hasValidationError={false} value={email} handleChange={setEmail}/>
                        <TextAreaField placeholder={"MESSAGE"} hasValidationError={false} value={message} handleChange={setMessage}/>
                        <Button text={"Send Message"} href={""} />
                    </SendMessage>
            </ContactContainer>
            <Footer>
                <SectionBreak />
                <NavigationMenu />
            </Footer>
            <Rings src={rings}/>
        </ContactWrapper>
    )
}