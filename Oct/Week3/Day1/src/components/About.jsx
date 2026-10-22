import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {

  let navigate=useNavigate()
  return (
    <div>About

      <br />
      <button
      onClick={()=>navigate("/service")}
      >go to Service page</button>
    </div>
  )
}

export default About