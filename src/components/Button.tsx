import { ButtonContainer, ButtonText, Line } from "./styles/Button.styles";

export function Button(props: {text: string, href: string}) {
    return (
        <ButtonContainer onClick={() => null}>
            <ButtonText>{props.text}</ButtonText>
            <Line />
        </ButtonContainer>
    )
}
