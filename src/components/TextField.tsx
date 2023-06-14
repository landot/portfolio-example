import { useState } from "react"
import styled, { css } from "styled-components"
import { Colors } from "../assets/colors"

export const Line = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background: ${Colors.white};
`

export const textInputStyle = css`
    background-color: inherit;  
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.222222px;
    color: ${Colors.white};
    margin-left: 24px;
`

const Input = styled.input`
    ${textInputStyle}
`

export const InputContainer = styled.div<{ hasError?: boolean; }>`
    background-color: inherit;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    ${Line} {
        background: ${props => props.hasError ? Colors.redAccent : Colors.white};
    }

    ${Input}:focus + ${Line} {
        background: ${props => props.hasError ? Colors.redAccent : Colors.greenAccent};
    }
`

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.166667px;
    color: ${Colors.redAccent};
`


export function TextField(props: {
    placeholder: string, 
    value: string,
    handleChange: (text: string) => void,
    validation: any
}) {
    const [hasError, setHasError] = useState(false);

    // todo add in logic to validate form data
    return (
        <InputContainer hasError={hasError}>
            <Input type='text' placeholder={props.placeholder} value={props.value} onChange={(e) => props.handleChange(e.target.value)}/>
            <Line />
            {hasError && (
                <ErrorContainer>Sorry, invalid format here</ErrorContainer>
            )}
        </InputContainer>
    )
}