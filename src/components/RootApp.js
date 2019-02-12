import React from 'react'
import Homepage from './Homepage.js'


//add routing here

const RootApp = () => {
  
  return (
    <div>
      <Homepage 
        token = {process.env.REACT_APP_ACCESS_TOKEN}
        spaceId = {process.env.REACT_APP_SPACE_ID}
        baseUrl = {process.env.REACT_APP_BASE_URL}
      />
    </div>
  )
}

export default RootApp