import styled from "styled-components"
import { Colors } from "../assets/colors"

export const Break = styled.div`
    width: 100%;
    height: 1px;
    background: ${Colors.white};
`

export function SectionBreak() {
    return (
        <Break />
    )
}