import styled from "styled-components"
import rings from "../assets/images/pattern-rings.svg";
import { SkillData } from '../data/skills';
import { Skill } from "./Skill";
import { HeadingL } from "./HeadlingL";


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
    grid-template-columns: repeat(auto-fill, 280px);
    grid-auto-rows: 100px;                     
    grid-gap: 30px;  
    justify-content: center;
    align-content: center;

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        grid-gap: 7px;  
    }

    @media screen and (max-width: ${props => props.theme.viewports.mobile})  {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ${HeadingL} {
            text-align: center;
        }
    }

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