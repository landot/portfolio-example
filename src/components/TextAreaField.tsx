import styled from "styled-components"
import { useState } from "react"
import { ErrorContainer, InputContainer, Line, textInputStyle } from "./TextField"
import { Colors } from "../assets/colors"

const StyledTextArea = styled.textarea`
    height: 100px;
    resize: none;
    ${textInputStyle}
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
    validation: any
}) {
    const [hasError, setHasError] = useState(false);

    return (
        <TextAreaContainer hasError={hasError}>
            <StyledTextArea placeholder={props.placeholder} onChange={(e) => props.handleChange(e.target.value)}>{props.value}</StyledTextArea>
            <Line />
            {hasError && (
                <ErrorContainer>Sorry, invalid format here</ErrorContainer>
            )}
        </TextAreaContainer>
    )
}