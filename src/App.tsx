import styled, { ThemeProvider } from 'styled-components';
import { Contact } from './components/Contact';
import { Intro } from './components/Intro';
import { theme } from './theme';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ProjectsContainer } from './components/styles/Projects.styles';
import { Break } from './components/styles/SectionBreak.styles';
import { SkillsContainer } from './components/styles/Skills.styles';
import './App.css';

const AppStyles = styled.div`
  background-color: ${props => props.theme.colors.black};
  display: flex;
  justify-content: center;
  padding: 30px;
`

const Content = styled.div`
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles>
        <Content>
          <Intro />
          <Break />
          <Skills />
          <Projects />
        </Content>
      </AppStyles>
      <Contact />
    </ThemeProvider>
  )
}

export default App
