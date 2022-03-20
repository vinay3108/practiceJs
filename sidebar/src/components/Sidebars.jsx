import React, { useEffect, useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai';
import { SideBarData } from './SidebarDetails';
import { IconContext } from 'react-icons/lib';
import SidebarShort from './SidebarShort';
import './Sidebar.css'
import Test from './Test';
const Sidebars = () => {

    const [sidebar,setSidebar]=useState(false);

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
        <nav className={sidebar?'nav-menu':'nav-menu active'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to ='#' className='menu-bars'>
                        <AiOutlineClose  onClick={showSidebar}/>

                    </Link>
                </li>
                {SideBarData?.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Sidebars