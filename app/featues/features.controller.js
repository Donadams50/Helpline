const db = require("../mongoose");
const Securitys = db.securitys;
const Firstaids = db.firstaids
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

    exports.addLegalHelp = async(req, res) => {
        console.log(req.body)
       
        const {   name, phone, location} = req.body;
        
        if ( name && phone && location ){
            if ( name==="" || phone ===  "" || location === "" ){
                res.status(400).send({
                    message:"Incorrect entry format"
                });
            }else{
         
              
                const legalhelps = new Legalhelps({
                    phone: req.body.phone,
                    name: req.body.name,
                    location: req.body.location
      
              
                  });
        
             
                try{
               
                  
                     
                      const savelegalhelp = await  legalhelps.save()
                      console.log(savelegalhelp)
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


        exports.addAmbulance = async(req, res) => {
            console.log(req.body)
           
            const {   name, phone, location} = req.body;
            
            if ( name && phone && location ){
                if ( name==="" || phone ===  "" || location === "" ){
                    res.status(400).send({
                        message:"Incorrect entry format"
                    });
                }else{
             
                  
                    const ambulances = new Ambulances({
                        phone: req.body.phone,
                        name: req.body.name,
                        location: req.body.location
          
                  
                      });
            
                 
                    try{
                   
                      
                         
                          const saveambulances = await  ambulances.save()
                          console.log(saveambulances)
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


            exports.addFirstaid = async(req, res) => {
                console.log(req.body)
               
                const {   name, phone, location} = req.body;
                
                if ( name && phone && location ){
                    if ( name==="" || phone ===  "" || location === "" ){
                        res.status(400).send({
                            message:"Incorrect entry format"
                        });
                    }else{
                 
                      
                        const firstaids = new Firstaids({
                            phone: req.body.phone,
                            name: req.body.name,
                            location: req.body.location
              
                      
                          });
                
                     
                        try{
                       
                          
                             
                              const savefirstaid = await  firstaids.save()
                              console.log(savefirstaid)
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