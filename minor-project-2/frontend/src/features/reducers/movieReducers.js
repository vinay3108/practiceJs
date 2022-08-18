import { 
    ALL_MOVIE_REQUEST,
    ALL_MOVIE_SUCCESS,
    ALL_MOVIE_FAIL,
    CLEAR_ERRORS  
 } from "../constants/movieConstants";

 export const movieInitialState=[];

export const movieReducer=(state=movieInitialState,action)=>{
    switch(action.type){
        case ALL_MOVIE_REQUEST:
            return{
                loading:true,
                movieInitialState:[]
            };
        case ALL_MOVIE_SUCCESS:
            return{
                loading:false,
                movies:action.payload.movies,
            }
        case ALL_MOVIE_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
}