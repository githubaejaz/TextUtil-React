import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import PropTypes from 'prop-types'

function Navbar({title}) {
    
  const [ThemeStyle, SetThemeStyle] = useState("light")
  const [ThemeModeText, SetThemeModeText] = useState("Dark Mode")

  const HandleThemeMode= (event)=>{
    if(event.target.innerText === "Dark Mode"){
        SetThemeStyle("dark");
        SetThemeModeText("Light Mode");
    }
    else {
        SetThemeStyle("light");
        SetThemeModeText("Dark Mode");
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${ThemeStyle} bg-${ThemeStyle}`} >
  <a className="navbar-brand" href="/">{title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Left></Left>
    <button className="btn btn-primary mx-3" type="submit" onClick={HandleThemeMode}>{ThemeModeText}</button>
    <Right></Right>
  </div>
</nav>
  )
}

export default Navbar

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
}

// Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
Navbar.defaultProps = {
    title : "TextUtils (Default)"
}
