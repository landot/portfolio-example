import { PageText } from "./styles/PageText.styles";
import { SkillContainer, SkillHeader } from "./styles/Skill.styles";

export function Skill(props: {name: string, yearsOfExperience: number}) {
    return (
        <SkillContainer>
            <SkillHeader>{props.name}</SkillHeader>
            <PageText>{props.yearsOfExperience} Year{props.yearsOfExperience !== 1 ? 's': ''} Experience</PageText>
        </SkillContainer>
    )
}