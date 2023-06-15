import { ErrorContainer, Input, InputContainer, Line } from "./styles/TextField.styles";

export function TextField(props: {
    placeholder: string, 
    value: string,
    handleChange: (text: string) => void,
    hasValidationError: boolean
}) {
    return (
        <InputContainer hasError={props.hasValidationError}>
            <Input type='text' placeholder={props.placeholder} value={props.value} onChange={(e) => props.handleChange(e.target.value)}/>
            <Line />
            {props.hasValidationError && (
                <ErrorContainer>Sorry, invalid format here</ErrorContainer>
            )}
        </InputContainer>
    )
}