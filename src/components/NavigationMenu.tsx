import styled from "styled-components";
import githubLogo from "../assets/images/icon-github.svg";
import frontendMentorLogo from "../assets/images/icon-frontend-mentor.svg";
import twitteLogo from "../assets/images/icon-twitter.svg";
import linkedinLogo from "../assets/images/icon-linkedin.svg";


const NavigationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

const Link = ({className, href, children}: {className?: string, href: string, children: any}) => (
    <a href={href} className={className}>
        {children}
    </a>
)

const StyledLink = styled(Link)`
    width: 24px;
    height: 24px;
    margin: 0 16px;
`

const Links = styled.nav`
    width: fit-content;
    height: fit-contnet;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const PortfolioName = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.444444px;
    color: #FFFFFF;
`

export function NavigationMenu() {
    return (
        <NavigationContainer>
            <PortfolioName>adamkeyes</PortfolioName>
            <Links>
                <StyledLink href="">
                    <img src={githubLogo} alt="github icon" />
                </StyledLink>
                <StyledLink href="">
                    <img src={frontendMentorLogo} alt="frontend mentor icon" />
                </StyledLink>
                <StyledLink href="">
                    <img src={linkedinLogo} alt="LinkedIn icon" />
                </StyledLink>
                <StyledLink href="">
                    <img src={twitteLogo} alt="twitter icon" />
                </StyledLink>
            </Links>
        </NavigationContainer>
    )
}