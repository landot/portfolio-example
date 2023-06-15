import styled from 'styled-components'
import { Contact } from './components/Contact'
import { Intro } from './components/Intro'
import { Projects, ProjectsContainer } from './components/Projects'
import { Skills, SkillsContainer } from './components/Skills'
import { Break } from './components/SectionBreak'
import { Colors } from './assets/colors'
import './App.css'


const AppStyles = styled.div`
  background-color: ${Colors.black};
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

  @media screen and (max-width: 599px) and (min-width: 0px)  {
      ${ProjectsContainer} {
        margin-top: 80px;
        margin-bottom: 80px;
      }
    }

    @media screen and (max-width: 800px) and (min-width: 600px)  {
      ${ProjectsContainer} {
        margin-top: 100px;
        margin-bottom: 100px;
      }
    }
`

function App() {
  return (
    <>
      <AppStyles>
        <Content>
          <Intro />
          <Break />
          <Skills />
          <Projects />
        </Content>
      </AppStyles>
      <Contact />
    </>
  )
}

export default App
