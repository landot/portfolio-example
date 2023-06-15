import { Button } from "./Button";
import { NavigationMenu } from "./NavigationMenu";
import { PageText } from "./styles/PageText.styles";
import useWindowSize from "../utils/useWindowSize";
import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";
import { Heading } from "./styles/Heading.styles";
import { Rings } from "./styles/Contact.styles";
import { IntroContainer, ProfileImage, IntroMessage, Circle } from "./styles/Intro.styles";

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
            <ProfileImage src={`/assets/images/image-profile-${profilePictureSize}.webp`} alt={'profile picture'}/>
            <IntroMessage>
                <Heading>Nice to meet you! I'm <Button text={"Adam Keyes"} href={""} /></Heading>
                <PageText>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</PageText>
            </IntroMessage>
            <Button text={"Contact Me"} href={""} />
            <Rings src={rings} alt='decorative rings' aria-hidden="true"/>
            <Circle src={circle} alt='decorative circle' aria-hidden="true"/>
        </IntroContainer>
    )
}
