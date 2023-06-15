import { useState } from "react";
import { Button  } from "./Button";
import { NavigationMenu } from "./NavigationMenu";
import { PageText } from "./styles/PageText.styles";
import { TextField } from "./TextField";
import { SectionBreak } from "./SectionBreak";
import { TextAreaField } from "./TextAreaField";
import { ContactWrapper, ContactContainer, ContactMessage, SendMessage, Footer, Rings } from "./styles/Contact.styles";
import { HeadingXL } from "./styles/HeadingXL.styles";
import rings from "../assets/images/pattern-rings.svg";

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <ContactWrapper>
            <ContactContainer>
                    <ContactMessage>
                        <HeadingXL>Contact</HeadingXL>
                        <PageText>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</PageText>
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