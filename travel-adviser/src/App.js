import React from 'react'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'
import {CssBaseline,Grid} from '@material-ui/core'
import './App.css'
const App = () => {
  return (
    <>
    <Header/>
    <Grid container spacing={3} style={{width:'100%'}}>
      <Grid item xs={12} md={4}>
        <List/>
      </Grid>
        
      <Grid item xs={12} md={4}>
         <Map/>
      </Grid>
        
    </Grid>
    </>
  )
}

export default App