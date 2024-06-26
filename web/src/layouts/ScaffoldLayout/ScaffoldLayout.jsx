import styled from 'styled-components'

import { Toaster } from '@redwoodjs/web/toast'

import {
  ScaffoldContextProvider,
  useScaffoldReducer,
} from './contexts/optionContext'
import Headline from './Headline'
import Main from './Main'
import Statistics from './Statistics'
import SystemOptions from './SystemOptions'

const Header = styled('div')`
  display: flex;
  gap: 8px;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    &:first-child {
      flex-grow: 0;
    }
  }
`

const ScaffoldLayout = ({ children }) => {
  const stateControl = useScaffoldReducer()
  return (
    <ScaffoldContextProvider value={stateControl}>
      <div className="rw-scaffold">
        <Toaster
          toastOptions={{ className: 'rw-toast', duration: 6000 }}
          position="bottom-center"
        />
        <Header className="rw-header">
          <div>
            <Headline />
          </div>
          <div>
            <SystemOptions />
          </div>
          <div>
            <Statistics />
          </div>
          <div>
            <a href="/myHome.html">My Html</a>
          </div>
        </Header>
        <Main>{children}</Main>
      </div>
    </ScaffoldContextProvider>
  )
}

export default ScaffoldLayout
