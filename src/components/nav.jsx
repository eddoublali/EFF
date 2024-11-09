import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/events">All Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experts">Experts List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/expert">Expert</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/formulaire">Formulaire </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    </div>
  )
}
