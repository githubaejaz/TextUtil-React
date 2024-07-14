import React from 'react'
import { useParams } from 'react-router-dom'

function Dynamic() {
  
  const {UserName, Id} = useParams();

  return (
    <div>The user provided using query string is : {UserName} and Id : {Id}</div>
  )
}

export default Dynamic