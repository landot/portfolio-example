import styled from "styled-components";
import { Button, ButtonContainer, ButtonText, Line } from "./Button";
import { HeadingXL } from "./HeadingXL";
import { NavigationContainer, NavigationMenu } from "./NavigationMenu";
import { Text } from "./Text";
import useWindowSize from "../utils/useWindowSize";
import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";

const Rings = styled.img`
    position: absolute;
    z-index: 1;
    left: -250px;
    top: 80px;
`

const Circle = styled.img`
    position: absolute;
    width: 130px;
    z-index: 2;
    right: 375px;
    bottom:  75px;

    @media screen and (max-width: 800px) and (min-width: 0px)  {
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

    ${Text} {
        margin-top: 40px;
        margin-bottom: 66px;
        max-width: 450px;
    }

    ${ButtonContainer} {
        cursor: default;
    }

    @media screen and (max-width: 599px) and (min-width: 0px)  {
        ${ButtonText} {
            font-size: 40px;
            line-height: 40px;
        }
    }

    @media screen and (max-width: 800px) and (min-width: 600px)  {
        ${ButtonText} {
            font-size: 72px;
            line-height: 72px;
        }
    }
`

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 680px;
    margin-bottom: 100px;
    ${NavigationContainer} {
        margin-bottom: 120px;
    }

    @media screen and (max-width: 599px) and (min-width: 0px)  {
        align-items: center;
        height: fit-content;
    }

    @media screen and (max-width: 800px) and (min-width: 600px)  {
        height: 600px;
    }
`

const ProfileImage = styled.img`
    position: absolute;
    z-index: 2;
    width: 445px;
    height: 720px;
    right: 0;
    top: -40px;

    @media screen and (max-width: 599px) and (min-width: 0px)  {
        width: 174px;
        height: 383px;
        position: relative;
        right: 0;
        top: -100px;
    }

    @media screen and (max-width: 800px) and (min-width: 600px)  {
        width: 322px;
        height: 600px;
    }
`

export function Intro() {
    const size = useWindowSize();
    let profilePictureSize = '';
    if (size.width && size.width < 600) {
        profilePictureSize = 'mobile';
    } else if (size.width && size.width <= 800) {
        profilePictureSize ='tablet';
    } else {
        profilePictureSize = 'desktop';
    }

    return (
        <IntroContainer>
            <NavigationMenu />
            <ProfileImage src={`src/assets/images/image-profile-${profilePictureSize}.webp`}/>
            <IntroMessage>
                <HeadingXL>Nice to meet you! I'm <Button text={"Adam Keyes"} href={""} /></HeadingXL>
                <Text>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</Text>
            </IntroMessage>
            <Button text={"Contact Me"} href={""} />
            <Rings src={rings}/>
            <Circle src={circle}/>
        </IntroContainer>
    )
}
