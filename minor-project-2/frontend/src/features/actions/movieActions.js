import { ALL_MOVIE_REQUEST,
    ALL_MOVIE_SUCCESS,
    ALL_MOVIE_FAIL,
    CLEAR_ERRORS,

} from "../constants/movieConstants";
import axios from "axios";

export const fetchMovies=()=>async(dispatch)=>{
    try{
        dispatch({type:ALL_MOVIE_REQUEST});
        const {data}=await axios.get('/api/v1/movies');
        dispatch({
            type:ALL_MOVIE_SUCCESS,
            payload:data,
        })
    }
    catch(err){
        dispatch({
            type:ALL_MOVIE_FAIL,
            payload:err.response.data.message,
        })
    }

};



export const clearErrors = () => async ( dispatch ) =>
{
    dispatch( { type: CLEAR_ERRORS } );
};
