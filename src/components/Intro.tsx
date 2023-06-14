import styled from "styled-components";
import { Button, ButtonText, Line } from "./Button";
import { HeadingXL } from "./HeadingXL";
import { NavigationMenu } from "./NavigationMenu";
import { Text } from "./Text";
import useWindowSize from "../utils/useWindowSize";

const IntroMessage = styled.div`
    z-index: 2;
    width: 60%;

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
    }
`

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 850px;
    margin-bottom: 300px;

    @media screen and (max-width: 600px) and (min-width: 0px)  {
        align-items: center;
    }
`

const ProfileImage = styled.img`
    position: absolute;
    z-index: 0;
    width: 445px;
    height: 720px;
    right: 0;

    @media screen and (max-width: 600px) and (min-width: 0px)  {
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
                <HeadingXL>
                    Nice to meet you! I'm
                </HeadingXL>
                <Button text={"Adam Keyes"} href={""} />
                <Text>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</Text>
            </IntroMessage>
            <Button text={"Contact Me"} href={""} />
        </IntroContainer>
    )
}
