import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,

    
 } from "../constants/userConstants";
import { 
    LOAD_WATCHLIST_REQUEST,
    LOAD_WATCHLIST_SUCCESS,
    LOAD_WATCHLIST_FAIL,
 } from "../constants/movieConstants";
 import axios from "axios";
export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST});
        const config={Headers:{"Content-Type":"application/json"}};
        const {data}=await axios.post('/api/v1/login',{email,password},config);
        dispatch({type:LOGIN_SUCCESS,payload:data.user})

    }catch(err){
        dispatch({type:LOGIN_FAIL,payload:err.respose.data.message});
    }
}

export const logout=()=>async(dispatch)=>{
    try{
        await axios.get('api/v1/logout');
        dispatch({type:LOGOUT_SUCCESS});
    }
    catch(err){
        dispatch({
            type:LOGOUT_FAIL,
            payload:err.respose.data.message
        })
    }
}

export const loadUser=()=>async(dispatch)=>{
    try{
        dispatch({type:LOAD_USER_REQUEST});
        const {data}=await axios.get('/api/v1/me');
        dispatch({type:LOAD_USER_SUCCESS,payload:data.user})
    }catch(err){
        dispatch({type:LOAD_USER_FAIL,payload:err.response.data.message})
    }
}

export const loadWatchList=()=>async(dispatch)=>{
    try{
        dispatch({type:LOAD_WATCHLIST_REQUEST});
        const {data}=await axios.get('/api/v1/me');
        dispatch({
            type:LOAD_WATCHLIST_SUCCESS,
            payload:data.user.movies
        })
    }catch(err){
        dispatch({
            type:LOAD_WATCHLIST_FAIL,
            payload:err.response.data.message,
        })
    }
}
