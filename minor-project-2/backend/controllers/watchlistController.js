const User=require('../models/user');
const Movie=require('../models/movies');

exports.addMovieToWatchlist=async(req,res)=>{
    const user=req.user?req.user:null;
    try{
        const {id}=req.params;
        const movie=await Movie.findById(id);
        user.movies.push(movie);
        await user.save();
        await movie.save();
        res.status(201).json({
            user
        })
    }catch(err){

    }
}