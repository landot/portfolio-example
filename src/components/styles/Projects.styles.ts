import styled from "styled-components";

export const ProjectsContainer = styled.div`
    width: 100%;
    height: fit-content;
`

export const ProjectsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max(340px, 45%), 2fr));
    grid-gap: 70px 30px;  
    justify-content: center;
    align-content: center;

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        grid-gap: 60px 24px;  
    }
`