import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/actions/userActions';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
const LoginEmail = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const loginHandler=(e)=>{
        e.preventDefault();
        dispatch(login(email,password));
        setEmail("");
        setPassword("");
        history.push('/');
        
    
    }
  return (
    <LoginStyler>
        <label htmlFor="email">Email</label>
        <input type="text" 
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
          />
        
        <label htmlFor="password">Password</label>
        <input type="password" 
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
          />
          <button type="submit" onClick={loginHandler}>LOGIN</button>
        
    </LoginStyler>
  )
}

const LoginStyler=styled.div`
margin-top: 6rem;
`
export default LoginEmail