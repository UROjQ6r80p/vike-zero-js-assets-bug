import React from 'react'
import logo from './logo.svg'
import './PageShellStyle.css'

export { PageShell }

function PageShell({ children }) {
  return (
    <React.StrictMode>
        <Logo />
        <div>{children}</div>
    </React.StrictMode>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
