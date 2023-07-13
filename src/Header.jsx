import { useRef, useState } from "react"
import './styles/Header.css'

import {Link} from 'react-router-dom'

const Header = () => {
    const MoblieSidenav = useRef()
    const [menuSwitch,setMenuSwitch] = useState(true)
    
    const handleMenuSwitch = () => {
      if(!menuSwitch) {
        console.log('open')
        setMenuSwitch(true)
      }
      else {
        console.log('closed')
        setMenuSwitch(false)
      }
    }

    return <nav>

  <nav className="window-nav-bar" >

  {/* menu button */}
  <div 
  className="nav-menu-bar"
  onClick={handleMenuSwitch}
  >
    <div
    style={menuSwitch?
    {
      transform:'rotate(0deg)'
    }:
    {
      transform:'rotate(30deg)'
    }}
    ></div>
    <div
    style={menuSwitch?
      {
        width:'50%'
      }:
      {
        width: '0%'
      }
    }
    ></div>
    <span 
    className="nav-menu-bar-after"
    onClick={handleMenuSwitch}
    style={
      menuSwitch?
      {
        width:'0px',
        height:'0px',
        top:'50%',
        left:'50%'
      }:
      {
        width:'100%',
        height:'100%',
        top:'0%',
        left:'0%'
      }
    }
    ></span>
    <div
        style={menuSwitch?
          {
            transform:'rotate(0deg)'
          }:
          {
            transform:'rotate(-30deg)'
          }}
    ></div>
  </div>

  {/* header */}
    <div 
    className="nav-wrapper"
    style={!menuSwitch?{
      left: '40vw'
    }:{
      left: '150vw',
      transition:'500ms'
    }}
    >
    <ul ref = {MoblieSidenav} className="sidenav" id="mobile-demo">
        <h1><Link onClick={handleMenuSwitch} to={'/'} >Home</Link></h1>  
        <h1><Link onClick={handleMenuSwitch} to={'/blog'} >Blogs</Link></h1> 
        <h1><Link onClick={handleMenuSwitch} to={'/contact'} >Contact</Link></h1> 
  </ul>
    </div>
   
  </nav>
  {/* psudo header */}
   <div 
   className="nav-wrapper-psudo"
   style={menuSwitch?
    {
      left:'-40vw'
    }:
    {
      left:'0'
    }}
   ></div>    
    </nav>
}

export default Header