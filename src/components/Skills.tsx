import styled from "styled-components"
import { SkillData } from '../data/skills';
import { Skill, SkillContainer } from "./Skill";
import rings from "../assets/images/pattern-rings.svg";
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

    @media screen and (max-width: 599px) and (min-width: 0px)  {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ${HeadingL} {
            font-size: 32px;
            line-height: 40px;
            text-align: center;
            letter-spacing: -1px;
        }
    }

    @media screen and (max-width: 800px) and (min-width: 600px)  {
        grid-gap: 7px;  
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