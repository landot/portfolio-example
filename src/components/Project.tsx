import styled from "styled-components";
import { HeadingM } from "./HeadingM";
import { Text } from "./Text";

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${HeadingM} {
        text-transform: uppercase;
    }
`

const ProjectImage = styled.img`
    max-width:100%;
    max-height:100%;
    margin-bottom: 20px;
`

const SkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 7px;

    ${Text} {
        margin-right: 18px;
        text-transform: uppercase;
    }
`

export function Project(props: {
    name: string, 
    skills: string[],
    src: string,
    alt: string
}) {
    return (
        <ProjectContainer>
            <ProjectImage src={props.src} alt={props.alt}/>
            <HeadingM>{props.name}</HeadingM>
            <SkillContainer>
                {props.skills.map(skill => (
                    <Text>{skill}</Text>
                ))}
            </SkillContainer>
        </ProjectContainer>
    )
}