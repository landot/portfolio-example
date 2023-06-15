import styled from "styled-components";
import { TextInputStyle } from "./styles/InputStyle.styles";
import { InputContainer, Line } from "./styles/TextField.styles";

export const StyledTextArea = styled.textarea`
    height: 100px;
    resize: none;
    ${TextInputStyle}
`

export const TextAreaContainer = styled(InputContainer)<{ hasError?: boolean; }>`
    ${StyledTextArea}:focus + ${Line} {
        background: ${props => props.hasError ? props => props.theme.colors.redAccent : props => props.theme.colors.greenAccent};
    }
`
