import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  homeButtonLabel,
  homeButtonTo,
  children,
}) => {
  return (
    <div className="rw-scaffold">
      <Toaster
        toastOptions={{ className: 'rw-toast', duration: 6000 }}
        position="bottom-center"
      />
      <header className="rw-header">
        {titleTo && (
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes[titleTo]()} className="rw-link">
              {title}
            </Link>
          </h1>
        )}
        {buttonTo && (
          <Link to={routes[buttonTo]()} className="rw-button rw-button-green">
            <div className="rw-button-icon">+</div> {buttonLabel}
          </Link>
        )}
        {homeButtonTo && (
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes[homeButtonTo]()} className="rw-link">
              {homeButtonLabel}
            </Link>
          </h1>
        )}
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
