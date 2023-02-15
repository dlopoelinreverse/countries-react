import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="header-container">
        <Link to="/">
        <h1>Where in the world?</h1>
        </Link>
        <button>Dark Mode</button>
        </div>
    </header>
  )
}
