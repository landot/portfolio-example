import { IProject } from "../data/projects";
import { Button } from "./Button";
import { PageText } from "./styles/PageText.styles";
import { ProjectContainer, ProjectHeader, ProjectImage, ProjectImageContainer, ProjectImageOverlay, SkillContainer } from "./styles/Project.styles";

export function Project(props: IProject) {
    return (
        <ProjectContainer>
            <ProjectImageContainer>
                <ProjectImageOverlay>
                    <Button text={"View Project"} href={props.projectUrl}/>
                    <Button text={"View Code"} href={props.codeUrl}/>
                </ProjectImageOverlay>
                <ProjectImage src={props.largeImgSrc} alt={`${props.name} project screenshot`}/>
            </ProjectImageContainer>
            <ProjectHeader>{props.name}</ProjectHeader>
            <SkillContainer>
                {props.skills.map((skill, index) => (
                    <PageText key={`${skill}-${index}`}>{skill}</PageText>
                ))}
            </SkillContainer>
        </ProjectContainer>
    )
}