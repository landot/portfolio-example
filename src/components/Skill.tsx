import styled from "styled-components"
import { HeadingL } from "./HeadlingL"
import { Text } from "./Text"

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;

    ${HeadingL} {
        margin-bottom: 14px;
    }
`

export function Skill(props: {name: string, yearsOfExperience: number}) {
    return (
        <SkillContainer>
            <HeadingL>{props.name}</HeadingL>
            <Text>{props.yearsOfExperience} Year{props.yearsOfExperience !== 1 ? 's': ''} Experience</Text>
        </SkillContainer>
    )
}