import { HeadingL } from "./styles/HeadlingL.styles";
import { PageText } from "./styles/PageText.styles";
import { SkillContainer } from "./styles/Skill.styles";

export function Skill(props: {name: string, yearsOfExperience: number}) {
    return (
        <SkillContainer>
            <HeadingL>{props.name}</HeadingL>
            <PageText>{props.yearsOfExperience} Year{props.yearsOfExperience !== 1 ? 's': ''} Experience</PageText>
        </SkillContainer>
    )
}