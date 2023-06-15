import rings from "../assets/images/pattern-rings.svg";
import { SkillData } from '../data/skills';
import { Skill } from "./Skill";
import { Rings, SkillsContainer } from "./styles/Skills.styles";

export function Skills() {
    return (
        <SkillsContainer>
            {SkillData.map((skill, index) => (
                <Skill {...skill} key={`${skill.name}-${index}`}/>
            ))}
            <Rings src={rings} alt={'decorative rings'}/>
        </SkillsContainer>
    )
}