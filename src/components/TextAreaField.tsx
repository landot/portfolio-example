import styled from "styled-components"
import { ErrorContainer, InputContainer, Line } from "./TextField"
import { Colors } from "../assets/colors"
import { TextInputStyle } from "../SharedStyles/InputStyle"

const StyledTextArea = styled.textarea`
    height: 100px;
    resize: none;
    ${TextInputStyle}
`

export const TextAreaContainer = styled(InputContainer)<{ hasError?: boolean; }>`
    ${StyledTextArea}:focus + ${Line} {
        background: ${props => props.hasError ? Colors.redAccent : Colors.greenAccent};
    }
`


export function TextAreaField(props: {
    placeholder: string, 
    value: string,
    handleChange: (text: string) => void,
    hasValidationError: boolean
}) {
    return (
        <TextAreaContainer hasError={props.hasValidationError}>
            <StyledTextArea placeholder={props.placeholder} onChange={(e) => props.handleChange(e.target.value)}>{props.value}</StyledTextArea>
            <Line />
            {props.hasValidationError && (
                <ErrorContainer>Sorry, invalid format here</ErrorContainer>
            )}
        </TextAreaContainer>
    )
}