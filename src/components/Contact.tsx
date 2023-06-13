import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { HeadingXL } from "./HeadingXL";
import { NavigationContainer, NavigationMenu } from "./NavigationMenu";
import { Text } from "./Text";
import { TextField } from "./TextField";
import rings from "../assets/images/pattern-rings.svg";


const SendMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const ContactMessage = styled.div`
    ${HeadingXL} {
        margin-bottom: 36px;
    }
`

const ContactContainer = styled.div`
    z-index: 2;
    position: relative;
    padding: 80px 160px;
    background: #242424;
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "contactMessage sendMessage"
    "footer footer";

    ${SendMessage} {
        z-index: 2;
        grid-area: sendMessage;
    }

    ${ContactMessage} {
        z-index: 2;
        grid-area: contactMessage;
    }

    ${NavigationContainer} {
        z-index: 2;
        grid-area: footer;
    }

    @media (max-width: 800px) {
        grid-template-areas:
        "contactMessage"
        "sendMessage"
        "asdf"
        "footer";
        grid-template-columns: 1fr; 
    }
`

const Rings = styled.img`
    position: absolute;
    z-index: 1;
    left: -300px;
    bottom: 100px;
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
                <TextField placeholder={"Name"} validation={undefined} value={name} handleChange={setName} />
                <TextField placeholder={"Email"} validation={undefined} value={email} handleChange={setEmail}/>
                {/* todo turn into textarea later */}
                <TextField placeholder={"Message"} validation={undefined} value={message} handleChange={setMessage}/>
                <Button text={"Send Message"} href={""} />
            </SendMessage>
            {/* todo add line break */}
            <NavigationMenu />
            <Rings src={rings}/>
        </ContactContainer>
    )
}