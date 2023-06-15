import { IProject } from "../data/projects";
import { Button } from "./Button";
import { HeadingM } from "./styles/HeadingM.styles";
import { PageText } from "./styles/PageText.styles";
import { ProjectContainer, ProjectImage, ProjectImageContainer, ProjectImageOverlay, SkillContainer } from "./styles/Project.styles";

export function Project(props: IProject) {
    return (
        <ProjectContainer>
            <ProjectImageContainer>
                <ProjectImageOverlay>
                    <Button text={"View Project"} href={props.projectUrl}/>
                    <Button text={"View Code"} href={props.codeUrl}/>
                </ProjectImageOverlay>
                <ProjectImage src={props.largeImgSrc} alt={`${props.name} image`}/>
            </ProjectImageContainer>
            <HeadingM>{props.name}</HeadingM>
            <SkillContainer>
                {props.skills.map(skill => (
                    <PageText>{skill}</PageText>
                ))}
            </SkillContainer>
        </ProjectContainer>
    )
}