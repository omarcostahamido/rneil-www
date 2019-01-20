import React from 'react'
import Homepage from './Homepage.js'


//add routing here

const RootApp = () => {
  
  return (
    <div>
      {console.log(`testing ${process.env.REACT_APP_API_KEY}`)}
      <Homepage />
    </div>
  )
}

export default RootApp