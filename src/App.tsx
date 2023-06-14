import styled from 'styled-components'
import { Contact, ContactContainer } from './components/Contact'
import { Intro, IntroMessage } from './components/Intro'
import { Projects, ProjectsContainer } from './components/Projects'
import { Skills, SkillsContainer } from './components/Skills'
import { Break } from './components/SectionBreak'
import './App.css'
import { HeadingXL } from './components/HeadingXL'
import { ButtonText } from './components/Button'


const AppStyles = styled.div`
  background-color: #151515;
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
  }

  ${ContactContainer} {
    margin-top: 140px;
  }
`

// todo use themeprovider or a constant file with colors
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
