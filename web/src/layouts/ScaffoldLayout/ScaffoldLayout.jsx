import styled from 'styled-components'

import { Toaster } from '@redwoodjs/web/toast'

import { ScaffoldContextProvider, useScaffoldReducer } from './contexts'
import Headline from './Headline'
import SystemOptions from './SystemOptions'

const Header = styled('div')`
  display: flex;
  gap: 8px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:first-child {
      flex-grow: 1;
    }
  }
`

const ScaffoldLayout = ({
  title,
  titleTo,
  // buttonLabel,
  // buttonTo,
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
        <main className="rw-main">{children}</main>
      </div>
    </ScaffoldContextProvider>
  )
}

export default ScaffoldLayout
