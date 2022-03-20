import React,{useState,useRef,useEffect} from 'react'
import Sidebars from './components/Sidebars'
import './App.css'
const App = () => {
  
  return (
    // <div className="wrapper" ref={ref}>
    //   <button
    //     className="button"
    //     onClick={() => setIsMenuOpen(oldState => !oldState)}
    //   >
    //     Click Me
    //   </button>
    //   {isMenuOpen && (
      //     <ul className="list">
      //       <li className="list-item">dropdown option 1</li>
      //       <li className="list-item">dropdown option 2</li>
      //       <li className="list-item">dropdown option 3</li>
      //       <li className="list-item">dropdown option 4</li>
      //     </ul>
      //   )}
      // </div>
      <Sidebars/>
      )
      
}

export default App