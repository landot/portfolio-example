import styled from "styled-components";
import { Button } from "./Button";
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
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 20px;
`

const ProjectImageOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, .75);
    mix-blend-mode: normal;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 48px;
    align-items: center;
    visibility: hidden;
`

const ProjectImageContainer = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;


    &:hover ${ProjectImageOverlay} {
        visibility: visible;
    }
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
    projectUrl: string,
    codeUrl: string,
    src: string,
    alt: string
}) {
    return (
        <ProjectContainer>
            <ProjectImageContainer>
                <ProjectImageOverlay>
                    <Button text={"View Project"} href={props.projectUrl}/>
                    <Button text={"View Code"} href={props.codeUrl}/>
                </ProjectImageOverlay>
                <ProjectImage src={props.src} alt={props.alt}/>
            </ProjectImageContainer>
            <HeadingM>{props.name}</HeadingM>
            <SkillContainer>
                {props.skills.map(skill => (
                    <Text>{skill}</Text>
                ))}
            </SkillContainer>
        </ProjectContainer>
    )
}