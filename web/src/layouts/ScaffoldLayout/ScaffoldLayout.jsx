import styled from 'styled-components'
import { Toaster } from '@redwoodjs/web/toast'
import {
  ScaffoldContextProvider,
  useScaffoldReducer,
} from './contexts/optionContext'
import DBInfoItems from './DBInfoItems'
import DBRepoItems from './DBRepoItems'
import Documents from './Documents'
import Headline from './Headline'
import Main from './Main'
import MemoTablet from './MemoTablet'
import SystemOptions from './SystemOptions'

const Header = styled('div')`
  display: flex;
  gap: 4px;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

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
            <MemoTablet />
            <DBRepoItems />
            <DBInfoItems />
            <Documents />
          </div>
        </Header>
        <Main>{children}</Main>
      </div>
    </ScaffoldContextProvider>
  )
}

export default ScaffoldLayout
