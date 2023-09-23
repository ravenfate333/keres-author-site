import React from 'react'
import { Link } from 'react-router-dom'

function Sample() {
  return (
    <>
     <h1 style={{textAlign: 'center'}}>Sample Page</h1>
     <br />
     <p>Hi. I am a sample page.</p> 
     {/* added to show use of Link instead of anchor tag */}
     <Link to={'/'}>Back to Home</Link>
    </>
  )
}

export default Sample
