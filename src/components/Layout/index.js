import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './index.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {/* Using &lt; and &gt; is a way to display the angle brackets as regular text, without having them interpreted as HTML or JSX tags. 
      It's often used when you want to display code snippets or special characters on a webpage without them being executed as code.*/}
        {/* <span className="tags top-tags">&lt;body&gt;</span> */}

        <Outlet />

        <span className="tags bottom-tags">
          {/* &lt;/body&gt;  */}
        <br />
        {/* <span className='bottom-tag-html'>&lt;/html&gt;</span> */}
        </span>

      </div>
    </div>
  )
}

export default Layout
