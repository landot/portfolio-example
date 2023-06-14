import styled from "styled-components";
import { ReactComponent as GithubLogo } from '../assets/images/icon-github.svg';
import { ReactComponent as TwitteLogo } from '../assets/images/icon-twitter.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/icon-linkedin.svg';
import { ReactComponent as FrontendMentorLogo } from '../assets/images/icon-frontend-mentor.svg';
import { Colors } from "../assets/colors";

const Link = ({className, href, children}: {className?: string, href: string, children: any}) => (
    <a href={href} className={className}>
        {children}
    </a>
)

const StyledLink = styled(Link)`
    width: 24px;
    height: 24px;
    margin: 0 16px;

    &:hover svg {
        fill: ${Colors.greenAccent};
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

    @media (max-width: 599px) {
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
    color: ${Colors.white};
`

export function NavigationMenu() {
    return (
        <NavigationContainer>
            <PortfolioName>adamkeyes</PortfolioName>
            <Links>
                <StyledLink href="">
                    <GithubLogo fill={Colors.white}/>
                </StyledLink>
                <StyledLink href="">
                    <FrontendMentorLogo fill={Colors.white}/>
                </StyledLink>
                <StyledLink href="">
                    <LinkedinLogo fill={Colors.white} />
                </StyledLink>
                <StyledLink href="">
                    <TwitteLogo fill={Colors.white} />
                </StyledLink>
            </Links>
        </NavigationContainer>
    )
}