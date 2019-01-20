import React from 'react'

class Header extends React.Component {
  render() {
    const { copy , img } = this.props
    return (
      <div>
        <h1 className="header-message">{ copy }</h1>
        <img className="header-img" src={ img } />
        <p>Exhibitions</p>
      </div>
    )
  }
}

export default Header