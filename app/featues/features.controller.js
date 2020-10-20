const db = require("../mongoose");
const Securitys = db.securitys;
const firstaids = db.firstaids
const Legalhelps = db.legalhelps
const Ambulances = db.ambulances

exports.addSecurity = async(req, res) => {
    console.log(req.body)
   
    const {   name, phone, location} = req.body;
    
    if ( name && phone && location ){
        if ( name==="" || phone ===  "" || location === "" ){
            res.status(400).send({
                message:"Incorrect entry format"
            });
        }else{
     
          
            const securitys = new Securitys({
                phone: req.body.phone,
                name: req.body.name,
                location: req.body.location
  
          
              });
    
         
            try{
           
              
                 
                  const savesecurity = await  securitys.save()
                  console.log(savesecurity)
                 res.status(201).send({message:"List saved succesfully"})
                
         
                       
                
            }catch(err){
                console.log(err)
                res.status(500).send({message:"Error while saving "})
            }
        }
    }else{
        res.status(400).send({
            message:"Incorrect entry format"
        });
    }
    };


