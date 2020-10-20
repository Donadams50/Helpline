const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const dotenv = require('dotenv');
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.url;

db.profiles = require("../members/members.model.js")(mongoose);
db.securitys = require("../featues/security.model.js")(mongoose);
db.firstaids = require("../featues/firstaid.model.js")(mongoose);
db.legalhelps = require("../featues/legalhelp.model.js")(mongoose);
db.ambulances = require("../featues/ambulance.model.js")(mongoose);

db.auths = require("../members/auth.model.js")(mongoose);
module.exports = db;
