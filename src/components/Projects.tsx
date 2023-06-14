import styled from "styled-components"
import { ProjectData } from "../data/projects";
import { Button } from "./Button";
import { HeadingXL } from "./HeadingXL";
import { Project } from "./Project";


const ProjectsContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
`

const ProjectsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 540px);
    grid-auto-rows: 500px;                     
    grid-gap: 30px;  
    justify-content: center;
    align-content: center;
`

export function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsHeader>
                <HeadingXL>Projects</HeadingXL>
                <Button text="Contact Me" href="" />
            </ProjectsHeader>
            <ProjectGrid>
                {ProjectData.map(project => (
                    <Project {...project} />
                ))}
            </ProjectGrid>
        </ProjectsContainer>
    )
}
