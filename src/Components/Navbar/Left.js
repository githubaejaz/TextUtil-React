import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Left() {

  const navigate = useNavigate();
  let UserName = "Aejaz-react";
  
  return (
    
     <ul className="navbar-nav mr-auto">
       <li className="nav-item active">
         <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/about">About</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to={`/dynamic/${UserName}/Id`}>Dynamic</Link>
       </li>
       <li className="nav-item">
          <button className="btn btn-primary" onClick={() => navigate(`/dynamic/${UserName}/Id`)}>Navigate</button>
       </li>
        <li>
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
        <li>
          <Link className="nav-link" to="/loopdata">Loop (Map)</Link>
        </li>
       {/* <li className="nav-item dropdown">
    //     <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //       Dropdown
    //     </a>
    //     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //       <a className="dropdown-item" href="/">Action</a>
    //       <a className="dropdown-item" href="/">Another action</a>
    //       <div className="dropdown-divider"></div>
    //       <a className="dropdown-item" href="/">Something else here</a>
    //     </div>
    //   </li>
    //   <li className="nav-item">
    //     <a className="nav-link disabled" href="/">Disabled</a>
    //   </li> */}
     </ul>
  )
}

export default Left