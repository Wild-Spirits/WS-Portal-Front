import React from "react"
import { useNavigate } from "react-router-dom";
import logo from "../Assets/WS123.png"

/**
 * Component for representation of a navbar.
 * @component
 */
const NavBar = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  }

  const handleClickRegister = () => {
    navigate("/register");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt='logoWS' style={{width:"2.6rem"}} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/dscr">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/docs">Docs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/features">Features</a>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" className="btn btn-light" onClick={() => {handleClickLogin()}}>
          Login
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
          </svg>
        </button>
        <button type="button" className="btn btn-light" onClick={() => {handleClickRegister()}}>
          Become a member
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
          </svg>
        </button>
      </nav>
    </>
  )
}
export default NavBar