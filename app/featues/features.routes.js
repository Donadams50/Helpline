module.exports = app => {
    const   Sendmail = require("./features.controller");
    const jwtTokenUtils = require('../helpers/jwtTokenUtils')
    const { verifyToken } = jwtTokenUtils;
    
 
        
 
//   app.get("/orders/:status",  verifyToken,  isAdmin, order.findOrder)
 
}