
const db = require("../mongoose");
const Members = db.profiles;
 const Auths = db.auths;
const passwordUtils =require('../helpers/passwordUtils');
const jwtTokenUtils = require('../helpers/jwtTokenUtils.js');
const sendemail = require('../helpers/emailhelper.js');

 const { signToken } = jwtTokenUtils;
// const uuid = require('uuid')


// Create and Save a new User

exports.create = async(req,res)=>{
    if (!req.body){
        res.status(400).send({message:"Content cannot be empty"});
    }
console.log(req.body)
  
    const {firstname, lastname,  username, email, password} = req.body;
  
    if ( firstname && username && lastname  && password ){
        if (  username==="" || password===""  || firstname === "" || lastname === "" ){
            res.status(400).send({
                message:"Incorrect entry format"
            });
        }else{
            
            
            const members = new Members({
                
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email.toLowerCase(),
            
               
                
                
              });
              const auths = new Auths({
                
                username: req.body.username,
               
               
                
                
              });
              
         
            try{
              const isUserExist = await Members.findOne({username: username} )
              console.log(isUserExist)
               if(isUserExist){
                res.status(400).send({message:" Username  already exists"})
               }else{
                auths.password = await passwordUtils.hashPassword(req.body.password.toLowerCase());
                 const saveauth = await  auths.save()

                 if(saveauth._id){
                    const savemember = await  members.save()
                    res.status(201).send({message:"User  created"})
                    console.log(savemember)
                      }
                   
         
          }                      
                
            }catch(err){
                console.log(err)
                res.status(500).send({message:"Error while creating profile "})
            }
        }
    }else{
        res.status(400).send({
            message:"Incorrect entry format"
        });
    }
}
// Retrieve all Tutorials from the database.
exports.signIn = async(req, res) => {
  if (!req.body){
    res.status(400).send({message:"Content cannot be empty"});
}
console.log(req.body)
// let {myrefCode} = req.query;
const {   password, username  } = req.body;

if ( password && username ){
    if ( password==="" || userName==="" ){
        res.status(400).send({
            message:"Incorrect entry format"
        });
    }else{
        
        
        const members = new Members({
            password: req.body.password,
            username: req.body.username.toLowerCase()
            
          });

     
        try{
         const User = await Members.findOne({username: req.body.username} )
         
         const Auth = await Auths.findOne({username: req.body.username} )
        
         console.log(User)
         if(User){
         const retrievedPassword = Auth.password
         const id = User._id;
         const { username , firstname, lastname, email} = User
         const isMatch = await passwordUtils.comparePassword(password.toLowerCase(), retrievedPassword);
            console.log(isMatch )
            if (isMatch){
                const tokens = signToken( id, username, firstname, lastname, email ) 
            
              let user = {}

              
              user.profile = { id, firstname, lastname, username,  email } 
               
                    user.token = tokens;   
                               
                    res.status(200).send(user)                         
            }else{
                res.status(400).json({message:"Incorrect Login Details"})
            }
                   
        }
        else{
            res.status(400).send({message:" User does not exists"})
      }
        }catch(err){
            console.log(err)
            res.status(500).send({message:"Error while signing in "})
        }
    }
}else{
    res.status(400).send({
        message:"Incorrect entry format"
    });
}
};






// process email one
async function processEmail(emailFrom, emailTo, subject, link, link2, text, fName){
  try{
      //create org details
      // await delay();
     const sendmail =  await sendemail.emailUtility(emailFrom, emailTo, subject, link, link2, text, fName);
   //  console.log(sendmail)
      return sendmail
  }catch(err){
      console.log(err)
      return err
  }

}

