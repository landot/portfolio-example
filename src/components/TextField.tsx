import { useState } from "react"
import styled from "styled-components"

const Line = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background: #FFFFFF;
`

const Input = styled.input`
background-color: inherit;  
border: none;
outline: none;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
letter-spacing: -0.222222px;
color: #FFFFFF;
margin-left: 24px;

::placeholder,
::-webkit-input-placeholder {
    mix-blend-mode: normal;
    opacity: 0.5;
}
:-ms-input-placeholder {
    mix-blend-mode: normal;
    opacity: 0.5;
}
`

const InputContainer = styled.div<{ hasError?: boolean; }>`
    background-color: inherit;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    ${Line} {
        background: ${props => props.hasError ? "#FF6F5B" : "#FFFFFF"};
    }

    ${Input}:focus + ${Line} {
        background: ${props => props.hasError ? "#FF6F5B" : "#4EE1A0"};
    }
`

const ErrorContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.166667px;
    color: #FF6F5B;
`


export function TextField(props: {
    placeholder: string, 
    validation: any
}) {
    const [value, setValue] = useState('');
    const [hasError, setHasError] = useState(false);

    // todo add in logic to validate form data
    return (
        <InputContainer hasError={hasError}>
            <Input type='text' placeholder={props.placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
            <Line />
            {hasError && (
                <ErrorContainer>Sorry, invalid format here</ErrorContainer>
            )}
        </InputContainer>
    )
}