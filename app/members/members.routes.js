module.exports = app => {
    const member = require("./members.controller");
    // const jwtTokenUtils = require('../helpers/jwtTokenUtils')
    // const { verifyToken, isAdmin } = jwtTokenUtils;

        //console.log("routes")
 app.post("/members", member.create)
 app.post("/authenticate", member.signIn)
 
}