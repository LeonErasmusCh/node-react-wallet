import React, {useState} from 'react'
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Hello() {

  const [user, setUser] = useState("")

  return (
    <>
    <div>hello</div>
    <h1 className='bg-success'>Test</h1>
    <h1 className='bg-warning'>Test</h1>
    <h1 className='text-warning'>Test</h1>
    <h1 className='text-primary'>Test</h1>
    <h1 className='text-warming'>Test</h1>
    {user && (
      <Navigate to="/bye" replace={true} />
    )}
    </>
  )
}

export default Hello