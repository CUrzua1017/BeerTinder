const jwt = require('jsonwebtoken');

// module.exports.authenticate = (req, res, next) => {
//     jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
//         if (err) { 
//             res.status(401).json({verified: false});
//         } else {
//             next();
//         }
//         });
//     }

module.exports.authenticate = function(req,res,next){
    try{
        // console.log(req.cookies.token);
        jwt.verify(req.cookies.token, process.env.SECRET_KEY);
        next();
    }catch(e){
        res
        .status(401)
        .json({message:'Unathorized'});
    }
}