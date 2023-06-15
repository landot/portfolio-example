import styled from "styled-components"
import { ProjectsContainer } from "./Projects.styles"
import { SkillsContainer } from "./Skills.styles"

export const AppStyles = styled.div`
  background-color: ${props => props.theme.colors.black};
  display: flex;
  justify-content: center;
  padding: 30px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;

  ${SkillsContainer} {
    margin-top: 72px;
  }

  ${ProjectsContainer} {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  @media screen and (max-width: ${props => props.theme.viewports.mobile})  {
      ${ProjectsContainer} {
        margin-top: 80px;
        margin-bottom: 80px;
      }
    }

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
      ${ProjectsContainer} {
        margin-top: 100px;
        margin-bottom: 100px;
      }
    }
`