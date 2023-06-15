import rings from "../assets/images/pattern-rings.svg";
import { SkillData } from '../data/skills';
import { Skill } from "./Skill";
import { Rings } from "./styles/Contact.styles";
import { SkillsContainer } from "./styles/Skills.styles";

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