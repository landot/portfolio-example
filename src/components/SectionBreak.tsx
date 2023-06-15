import styled from "styled-components"

export const Break = styled.div`
    width: 100%;
    height: 1px;
    background: ${props => props.theme.colors.white};
`

export function SectionBreak() {
    return (
        <Break />
    )
}