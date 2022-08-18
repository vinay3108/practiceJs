const express=require('express');
const {registerUser,loginUser,logout,getUserDetails}=require('../controllers/userControllers');
const { addMovieToWatchlist } = require('../controllers/watchlistController');
const {isAuthenticatedUser} =require('../middleware/authMiddleware');

const router=express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);

router.route('/me').get(isAuthenticatedUser,getUserDetails);

// router.route('/watch/:id').post(isAuthenticatedUser,addMovieToWatchlist);

module.exports = router;