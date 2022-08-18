import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL
 } from "../constants/userConstants";

//  export const user=null;

export const userReducer=(state={user:{}},action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading:true,
                isAuthenticated:false,
            }
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case LOGOUT_SUCCESS:
            return{
                loading:false,
                user:{},
                isAuthenticated:false
            }

        case LOAD_USER_FAIL:
                return {
                  loading: false,
                  isAuthenticated: false,
                  user: null,
                  error: action.payload,
                };
        case LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                isAuthenticated:false,
                user:{},
                error:action.payload
            }
        default:
            return state;
    }
}