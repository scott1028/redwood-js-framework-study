import styled from 'styled-components'

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { ScaffoldContextProvider, useScaffoldReducer } from './contexts'
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
            {titleTo && (
              <h1 className="rw-heading rw-heading-primary">
                <Link to={routes[titleTo]()} className="rw-link">
                  {title}
                </Link>
              </h1>
            )}
            {homeButtonTo && (
              <h1 className="rw-heading rw-heading-primary">
                <Link to={routes[homeButtonTo]()} className="rw-link">
                  {homeButtonLabel}
                </Link>
              </h1>
            )}
            {/* {buttonTo && (
              <Link to={routes[buttonTo]()} className="rw-button rw-button-green">
                <div className="rw-button-icon">+</div> {buttonLabel}
              </Link>
            )} */}
            <div></div>
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
