import React from 'react'
import Head from './Head'
import { Outlet } from 'react-router-dom'

function Rool() {
  return (
    <div>
        <Head/>
    <div style={{mixHeight:"100vh"}}>
        <Outlet/>
    </div>
    </div>
  )
}

export default Rool