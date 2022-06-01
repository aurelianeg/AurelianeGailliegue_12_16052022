import React from 'react'
import './Loader.css'

/**
 * React component to create a loader when data are currently loading from fetch
 * @returns { React.ReactElement } Loader component
 */
function Loader() {
   return (
      <div className="loader_container">
         <div className="loader"></div>
      </div>
   )
}

export default Loader
