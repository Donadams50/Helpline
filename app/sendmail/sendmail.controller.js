const db = require("../mongoose");
const Sendmails = db.emails;
const sendemail = require('../helpers/emailhelper.js');
exports.create = async(req, res) => {
    console.log(req.body)
    // let {myrefCode} = req.query;
    const {   email} = req.body;
    
    if ( email ){
        if ( email===""  ){
            res.status(400).send({
                message:"Incorrect entry format"
            });
        }else{
      // console.log(req.file)
      // console.log( JSON.stringify( req.file.url ) ) 
          
            const sendmails = new Sendmails({
                email: req.body.email,
                name: req.body.name
  
          
              });
    
         
            try{
            //    const emailFrom = 'Ahiajara Skin care    <noreply@Ahiajara.com>';
            //       const subject = 'New order alert';                      
            //       const hostUrl = "ahiajara.netlify.app/dashboard"
            //        const hostUrl2 = "https://ahiajara.netlify.app/dashboard" 
            //     const admin = "Admin"
            //       const   text = "An new order from "+req.user.firstName+" "+req.user.lastName+" has been placed, Login to the dashboard to view" 
            //      const emailTo = 'tomiczilla@gmail.com'
            //      const link = `${hostUrl}`;
            //        const link2 = `${hostUrl2}`;
            //        processEmail(emailFrom, emailTo, subject, link, link2, text, admin);
              
                 
                  const savemail = await  sendmails.save()
                  console.log(savemail)
                 res.status(201).send({message:"List saved succesfully"})
                
         
                       
                
            }catch(err){
                console.log(err)
                res.status(500).send({message:"Error while making order "})
            }
        }
    }else{
        res.status(400).send({
            message:"Incorrect entry format"
        });
    }
    };

exports.sendMail = async (req, res) => {
    console.log(req.body)
    // let {myrefCode} = req.query;
    const {   email} = req.body;
    
    if ( email ){
        if ( email===""  ){
            res.status(400).send({
                message:"Incorrect entry format"
            });
        }else{
    
    
         
            try{
                for( var i = 0; i < req.body.email.length; i++){ 
                    const emailFrom = 'Test mail    <noreply@test.com.ng>';
                     const subject = req.body.subject;                      
                     const hostUrl = "test.com.ng"
                      const hostUrl2 = "https://test.com.ng" 
                    //    const firstname = req.body.email[i].firstName
                     const  text  = req.body.text
                     const emailTo = req.body.email[i].email
                     const link = `${hostUrl}`;
                      const link2 = `${hostUrl2}`;
                      processEmail(emailFrom, emailTo, subject, link, link2, text);
                      console.log(req.body.email[i])
                      }
              
                 
                //   const savemail = await  sendmails.save()
                //   console.log(savemail)
                 res.status(201).send({message:" Sent succesfully"})
                
         
                       
                
            }catch(err){
                console.log(err)
                res.status(500).send({message:"Error while making order "})
            }
        }
    }else{
        res.status(400).send({
            message:"Incorrect entry format"
        });
    }
    };

// process email one
async function processEmail(emailFrom, emailTo, subject, link, link2, text){
    try{
      
        // await delay();
       const sendmail =  await sendemail.emailUtility(emailFrom, emailTo, subject, link, link2, text);
     //  console.log(sendmail)
        return sendmail
    }catch(err){
        console.log(err)
        return err
    }
  
  }