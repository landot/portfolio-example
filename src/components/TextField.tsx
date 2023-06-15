import styled from "styled-components"
import { TextInputStyle } from "../SharedStyles/InputStyle"

export const Line = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.colors.white};
`

const Input = styled.input`
    ${TextInputStyle}
`

export const InputContainer = styled.div<{ hasError?: boolean; }>`
    background-color: inherit;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    ${Line} {
        background: ${props => props.hasError ? props => props.theme.colors.redAccent : props => props.theme.colors.white};
    }

    ${Input}:focus + ${Line} {
        background: ${props => props.hasError ? props => props.theme.colors.redAccent : props => props.theme.colors.greenAccent};
    }
`

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.166667px;
    color: ${props => props.theme.colors.redAccent};
`


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