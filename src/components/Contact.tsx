import { useState } from "react";
import styled from "styled-components";
import { Button, ButtonContainer  } from "./Button";
import { HeadingXL } from "./HeadingXL";
import { NavigationContainer, NavigationMenu } from "./NavigationMenu";
import { Text } from "./Text";
import { InputContainer, TextField } from "./TextField";
import { Break, SectionBreak } from "./SectionBreak";
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
`

export const ContactContainer = styled.div`
    z-index: 2;
    position: relative;
    padding: 80px 160px;
    background: #242424;
    width: 100dvw;
    height: fit-content;
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(360px, 600px) minmax(360px, 600px);
    grid-template-rows: 1fr 10px 40px;
    grid-template-areas:
    "contactMessage sendMessage"
    "lineBreak lineBreak"
    "footer footer";
    column-gap: 20px;

    ${SendMessage} {
        z-index: 2;
        grid-area: sendMessage;
        margin-bottom: 90px;
    }

    ${ContactMessage} {
        z-index: 2;
        grid-area: contactMessage;
        margin-bottom: 90px;
    }

    ${NavigationContainer} {
        z-index: 2;
        grid-area: footer;
        margin-top: 45px;
    }

    ${Break} {
        grid-area: lineBreak;
    }

    ${InputContainer}:not(:first-child) {
        margin-top: 32px;
    }

    @media screen and (max-width: 800px) {
        grid-template-areas:
        "contactMessage"
        "sendMessage"
        "lineBreak"
        "footer";
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
        <ContactContainer>
                <ContactMessage>
                    <HeadingXL>Contact</HeadingXL>
                    <Text>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</Text>
                </ContactMessage>
                <SendMessage>
                    <TextField placeholder={"NAME"} validation={undefined} value={name} handleChange={setName} />
                    <TextField placeholder={"EMAIL"} validation={undefined} value={email} handleChange={setEmail}/>
                    <TextAreaField placeholder={"MESSAGE"} validation={undefined} value={message} handleChange={setMessage}/>
                    <Button text={"Send Message"} href={""} />
                </SendMessage>
                <SectionBreak />
                <NavigationMenu />
            <Rings src={rings}/>
        </ContactContainer>
    )
}