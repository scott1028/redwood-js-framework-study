import styled from 'styled-components'

import { Toaster } from '@redwoodjs/web/toast'

import {
  ScaffoldContextProvider,
  useScaffoldReducer,
} from './contexts/optionContext'
import Headline from './Headline'
import Main from './Main'
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

const ScaffoldLayout = ({
  title,
  titleTo,
  homeButtonLabel,
  homeButtonTo,
  children,
}) => {
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
            <Headline
              title={title}
              titleTo={titleTo}
              homeButtonTo={homeButtonTo}
              homeButtonLabel={homeButtonLabel}
            />
          </div>
          <div>
            <SystemOptions />
          </div>
        </Header>
        <Main>{children}</Main>
      </div>
    </ScaffoldContextProvider>
  )
}

export default ScaffoldLayout
