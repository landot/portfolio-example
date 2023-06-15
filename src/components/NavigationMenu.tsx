import { useTheme } from "styled-components";
import { ReactComponent as GithubLogo } from '../assets/images/icon-github.svg';
import { ReactComponent as TwitterLogo } from '../assets/images/icon-twitter.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/icon-linkedin.svg';
import { ReactComponent as FrontendMentorLogo } from '../assets/images/icon-frontend-mentor.svg';
import { NavigationContainer, PortfolioName, Links, StyledLink } from "./styles/NavigationMenu.styles";

export function NavigationMenu() {
    const theme = useTheme();

    return (
        <NavigationContainer role="banner">
            <PortfolioName>adamkeyes</PortfolioName>
            <Links aria-label="navigation links">
                <StyledLink href="" aria-label="github link">
                    <GithubLogo fill={theme.colors.white}/>
                </StyledLink>
                <StyledLink href="" aria-label="frontend mentor link">
                    <FrontendMentorLogo fill={theme.colors.white}/>
                </StyledLink>
                <StyledLink href="" aria-label="linkedin link">
                    <LinkedinLogo fill={theme.colors.white} />
                </StyledLink>
                <StyledLink href="" aria-label="twitter link">
                    <TwitterLogo fill={theme.colors.white} />
                </StyledLink>
            </Links>
        </NavigationContainer>
    )
}