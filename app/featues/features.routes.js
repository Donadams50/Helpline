module.exports = app => {
    const   features = require("./features.controller");
    // const jwtTokenUtils = require('../helpers/jwtTokenUtils')
    // const { verifyToken } = jwtTokenUtils;
    
 
        
 
 app.post("/security",      features.addSecurity)
 app.post("/legalhelp",     features.addLegalHelp)
 app.post("/ambulance",     features.addAmbulance)
 app.post("/firstaid",      features.addFirstaid)
 app.get("/security/:state",      features.getSecurity)
 app.get("/legalhelp/:state",     features.getLegalHelp)
 app.get("/ambulance/:state",     features.getAmbulance)
 app.get("/firstaid/:state",      features.getFirstaid)
 
}