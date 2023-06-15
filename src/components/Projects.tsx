import { ProjectData } from "../data/projects";
import { Button } from "./Button";
import { Project } from "./Project";
import { HeadingXL } from "./styles/HeadingXL.styles";
import { ProjectGrid, ProjectsContainer, ProjectsHeader } from "./styles/Projects.styles";

export function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsHeader>
                <HeadingXL>Projects</HeadingXL>
                <Button text="Contact Me" href="" />
            </ProjectsHeader>
            <ProjectGrid>
                {ProjectData.map((project, index) => (
                    <Project {...project} key={`${project.name}-${index}`}/>
                ))}
            </ProjectGrid>
        </ProjectsContainer>
    )
}
