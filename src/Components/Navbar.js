import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

export default function Navbar(props) {


  return (
    <div>
         <nav className={`navbar navbar-expand-lg  bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`} to="/">{props.titles}</Link>
    {/* <a className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`} href="#">{props.titles}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='dark'?'light':'dark'}`} aria-current="page" to="/">Home</Link>
          {/* <a className={`nav-link active text-${props.mode==='dark'?'light':'dark'}`} aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} to="/about">About</Link>
          {/* <a className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} href="#">About</a> */}
        </li>
       
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      {/* <div className="d-flex">
        <div  className="bg-success rounded mx-2" onClick={()=>props.togglemode('success')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      </div> */}

<div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Mode Changer</label>
</div>
    </div>
  </div>
</nav>
      
    </div>
  )
}

Navbar.propTypes = 
{titles:PropTypes.string}

// Navbar.defaultProps={
//     titles:"Hi I am"
// }
