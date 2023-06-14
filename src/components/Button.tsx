import styled from "styled-components";
import { Colors } from "../assets/colors";

export const ButtonText = styled.p`
    margin: 0 0 10px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 2.28571px;
    color: ${Colors.white};
    text-transform: uppercase;
    white-space: nowrap;
`

export const ButtonContainer = styled.div`
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;

    &:hover ${ButtonText} {{
        color: ${Colors.greenAccent};
    }
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: ${Colors.greenAccent};
`

export function Button(props: {text: string, href: string}) {
    return (
        <ButtonContainer onClick={() => null}>
            <ButtonText>{props.text}</ButtonText>
            <Line />
        </ButtonContainer>
    )
}
