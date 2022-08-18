const Movie=require('../models/movies');
exports.getAllMovies=async(req,res)=>{
    const movies=await Movie.find({});
    res.status(200).json({
        movies
    })
}

exports.getMovieDetail=async(req,res)=>{
    const {id}=req.params;
    const movie=await Movie.findById(id);
    res.status(200).json({
        movie 
    })
}