module.exports = app => {
    const   features = require("./features.controller");
    // const jwtTokenUtils = require('../helpers/jwtTokenUtils')
    // const { verifyToken } = jwtTokenUtils;
    
 
        
 
 app.post("/security",      features.addSecurity)
 app.post("/legalhelp",     features.addLegalHelp)
 app.post("/ambulance",     features.addAmbulance)
 app.post("/firstaid",      features.addFirstaid)
 app.get("/security/:location",      features.getSecurity)
 app.get("/legalhelp/:location",     features.getLegalHelp)
 app.get("/ambulance/:location",     features.getAmbulance)
 app.get("/firstaid/:location",      features.getFirstaid)
 
}