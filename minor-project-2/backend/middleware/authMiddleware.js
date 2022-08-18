const jwt = require( 'jsonwebtoken' );
const User=require('../models/user');
const ErrorHandler=require('../utils/errorhandler');
exports.isAuthenticatedUser =  async ( req, res, next ) =>
{
    const { token } = req.cookies;

    if ( !token )
    {
        return next( new ErrorHandler( "Please Login To Access this resource", 401 ) );
    }

    const decodedData = jwt.verify( token,'jducbubdscbdcbdbccbdc');
    req.user = await User.findById( decodedData.id );
    
    next();
};


exports.authorizeRoles = ( ...roles ) =>
{
    return ( req, res, next ) =>{
        if ( !roles.includes( req.user.role ) )
        {
            return next(
            new ErrorHandler( `Role ${ req.user.role } is not allowed to access this resources`,403 ));
        }
        next();
    }
}