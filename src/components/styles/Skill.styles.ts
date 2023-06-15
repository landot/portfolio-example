import styled from "styled-components";
import { HeadingL } from "./HeadlingL.styles";

export const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    height: fit-content;
    width: fit-content;

    ${HeadingL} {
        margin-bottom: 14px;
    }
`
