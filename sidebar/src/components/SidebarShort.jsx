import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai';
import { SideBarData } from './SidebarDetails';
import { IconContext } from 'react-icons/lib';
import './Sidebar.css'
const SidebarShort = () => {
    const [sidebar,setSidebar]=useState(false);
    const[currData,setCurrData]=useState("Home");
    useEffect(()=>{
        console.log(currData);
    },[currData])
    const showSidebar=()=>{
        setSidebar(!sidebar);
    };
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <Link to='#' className='menu-bars'>
                <FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar?'nav-menu active':'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to ='#' className='menu-bars'>
                        <AiOutlineClose onClick={showSidebar}/>

                    </Link>
                </li>
                <h1>hello mr</h1>
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default SidebarShort