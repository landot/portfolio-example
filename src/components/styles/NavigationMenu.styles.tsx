import styled from "styled-components";

export const Link = ({className, href, children}: {className?: string, href: string, children: JSX.Element}) => (
    <a href={href} className={className}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
    width: 24px;
    height: 24px;
    margin: 0 16px;

    &:hover svg {
        fill: ${props => props.theme.colors.greenAccent};
    }
`

export const Links = styled.nav`
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

export const PortfolioName = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.444444px;
    color: ${props => props.theme.colors.white};
`