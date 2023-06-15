import { useTheme } from "styled-components";
import { ReactComponent as GithubLogo } from '../assets/images/icon-github.svg';
import { ReactComponent as TwitterLogo } from '../assets/images/icon-twitter.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/icon-linkedin.svg';
import { ReactComponent as FrontendMentorLogo } from '../assets/images/icon-frontend-mentor.svg';
import { NavigationContainer, PortfolioName, Links, StyledLink } from "./styles/NavigationMenu.styles";

export function NavigationMenu() {
    const theme = useTheme();

    return (
        <NavigationContainer>
            <PortfolioName>adamkeyes</PortfolioName>
            <Links aria-label="navigation links">
                <StyledLink href="" name="github">
                    <GithubLogo fill={theme.colors.white}/>
                </StyledLink>
                <StyledLink href="" name="frontend mentor">
                    <FrontendMentorLogo fill={theme.colors.white}/>
                </StyledLink>
                <StyledLink href="" name="linkedin">
                    <LinkedinLogo fill={theme.colors.white} />
                </StyledLink>
                <StyledLink href="" name="twitter">
                    <TwitterLogo fill={theme.colors.white} />
                </StyledLink>
            </Links>
        </NavigationContainer>
    )
}