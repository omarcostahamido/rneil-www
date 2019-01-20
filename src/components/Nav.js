import React from 'react'

const Nav = (props) => {
    return (
      <div>
        <nav>
        <img alt="logo" src={props.logo}/>
        <li><a>Work</a></li>
        <li><a>Contact</a></li>
        </nav>
      </div>
    )
  
}

export default Nav