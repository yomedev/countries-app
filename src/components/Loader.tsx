import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <div className='mt-5 d-flex justify-content-center'>
      <Spinner animation="grow"></Spinner>
    </div>
  )
}

export default Loader