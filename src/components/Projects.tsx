import styled from "styled-components"
import { ProjectData } from "../data/projects";
import { Button } from "./Button";
import { HeadingXL } from "./HeadingXL";
import { Project } from "./Project";

export const ProjectsContainer = styled.div`
    width: 100%;
    height: fit-content;
`

const ProjectsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max(340px, 45%), 2fr));
    grid-gap: 70px 30px;  
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 800px) and (min-width: 0px)  {
        grid-gap: 60px 24px;  
    }
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
