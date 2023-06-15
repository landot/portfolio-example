import { ErrorContainer, Line } from "./styles/TextField.styles";
import { TextAreaContainer, StyledTextArea } from "./TextAreaField.styles";

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