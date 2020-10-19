module.exports = app => {
    const   Sendmail = require("./sendmail.controller");
    const jwtTokenUtils = require('../helpers/jwtTokenUtils')
    const { verifyToken } = jwtTokenUtils;
    
 
        
 app.post("/list",  verifyToken, Sendmail.create)
  app.post("/sendmail",  verifyToken,  Sendmail.sendMail)
//   app.get("/orders/:status",  verifyToken,  isAdmin, order.findOrder)
 
}