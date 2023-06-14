import styled from "styled-components"
import { SkillData } from '../data/skills';
import { Skill } from "./Skill";
import rings from "../assets/images/pattern-rings.svg";


const Rings = styled.img`
    position: absolute;
    z-index: 1;
    right: -400px;
    bottom: -50px;
`

export const SkillsContainer = styled.div`
    position: relative;
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
            <Rings src={rings} />
        </SkillsContainer>
    )
}