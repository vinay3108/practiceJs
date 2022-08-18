const router=require('express').Router();
const {getAllMovies,getMovieDetail}=require('../controllers/moviesControllers')
router.route('/movies').get(getAllMovies);
router.route('/movie/:id').get(getMovieDetail);

module.exports=router;