import styled from "styled-components";

const ButtonText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 2.28571px;
    color: #FFFFFF;
    text-transform: uppercase;
`

const ButtonContainer = styled.div`
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: inherit;

    &:hover ${ButtonText} {{
        color: #4EE1A0;
    }
`

const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #4EE1A0;
`

export function Button(props: {text: string, href: string}) {
    return (
        // todo send user to href
        <ButtonContainer onClick={() => null}>
            <ButtonText>{props.text}</ButtonText>
            <Line />
        </ButtonContainer>
    )
}
