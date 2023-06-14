import styled from 'styled-components'
import { Contact } from './components/Contact'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import './App.css'


const AppStyles = styled.div`
  height: 100dvh;
  width: 100dvw;
  background-color: #151515;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
`

// todo use themeprovider or a constant file with colors
function App() {
  return (
    <AppStyles>
      <Content>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </Content>
    </AppStyles>
  )
}

export default App
