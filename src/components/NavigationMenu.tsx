import styled, { useTheme } from "styled-components";
import { ReactComponent as GithubLogo } from '../assets/images/icon-github.svg';
import { ReactComponent as TwitteLogo } from '../assets/images/icon-twitter.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/icon-linkedin.svg';
import { ReactComponent as FrontendMentorLogo } from '../assets/images/icon-frontend-mentor.svg';

const Link = ({className, href, children}: {className?: string, href: string, children: JSX.Element}) => (
    <a href={href} className={className}>
        {children}
    </a>
)

const StyledLink = styled(Link)`
    width: 24px;
    height: 24px;
    margin: 0 16px;

    &:hover svg {
        fill: ${props => props.theme.colors.greenAccent};
    }
`

const Links = styled.nav`
    width: fit-content;
    height: fit-contnet;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const NavigationContainer = styled.div`
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${props => props.theme.viewports.mobile}) {
        flex-direction: column;
        justify-content: flex-start;

        ${Links} {
            margin-top: 20px;
        }
    }
`

const PortfolioName = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.444444px;
    color: ${props => props.theme.colors.white};
`

export function NavigationMenu() {
    const theme = useTheme();

    return (
        <NavigationContainer>
            <PortfolioName>adamkeyes</PortfolioName>
            <Links>
                <StyledLink href="">
                    <GithubLogo fill={theme.colors.white}/>
                </StyledLink>
                <StyledLink href="">
                    <FrontendMentorLogo fill={theme.colors.white}/>
                </StyledLink>
                <StyledLink href="">
                    <LinkedinLogo fill={theme.colors.white} />
                </StyledLink>
                <StyledLink href="">
                    <TwitteLogo fill={theme.colors.white} />
                </StyledLink>
            </Links>
        </NavigationContainer>
    )
}