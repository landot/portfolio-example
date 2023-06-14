import styled from "styled-components"
import { SkillData } from '../data/skills';
import { Skill } from "./Skill";

const SkillsContainer = styled.div`
    z-index: 2;
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, 345px);
    grid-auto-rows: 100px;                     
    grid-gap: 30px;  
    justify-content: center;
    align-content: center;
`

export function Skills() {
    return (
        <SkillsContainer>
            {SkillData.map(skill => (
                <Skill {...skill} />
            ))}
        </SkillsContainer>
    )
}