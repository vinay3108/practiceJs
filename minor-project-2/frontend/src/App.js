import React, { useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import './App.css'
import Detail from './Components/Detail'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import LoginEmail from './Components/LoginEmail'
import { useDispatch } from 'react-redux'
import { loadUser} from './features/actions/userActions'
const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/login'>
            <LoginEmail/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/loginE'>
            <LoginEmail/>
          </Route>
          <Route exact path='/detail/:id'>
          <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
