import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <div className="form-group my-3">
            <h1>Page Not Found</h1>
            <Link to="/">Go to Home</Link>
    </div>
    </>
  )
}

export default PageNotFound