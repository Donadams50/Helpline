const db = require("../mongoose");
const Securitys = db.securitys;
const Firstaids = db.firstaids
const Legalhelps = db.legalhelps
const Ambulances = db.ambulances

exports.addSecurity = async(req, res) => {
    console.log(req.body)
   
    const {   name, phone, location, state} = req.body;
    
    if ( name && phone && location && state){
        if ( name==="" || phone ===  "" || location === "" || state === ""){
            res.status(400).send({
                message:"Incorrect entry format"
            });
        }else{
     
          
            const securitys = new Securitys({
                phone: req.body.phone,
                name: req.body.name,
                location: req.body.location,
                state: req.body.state
  
          
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
       
        const {   name, phone, location, state} = req.body;
        
        if ( name && phone && location && state){
            if ( name==="" || phone ===  "" || location === "" || state === "" ){
                res.status(400).send({
                    message:"Incorrect entry format"
                });
            }else{
         
              
                const legalhelps = new Legalhelps({
                    phone: req.body.phone,
                    name: req.body.name,
                    location: req.body.location,
                    state: req.body.state
      
              
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
           
            const {   name, phone, location, state} = req.body;
            
            if ( name && phone && location && state){
                if ( name==="" || phone ===  "" || location === "" || state === "" ){
                    res.status(400).send({
                        message:"Incorrect entry format"
                    });
                }else{
             
                  
                    const ambulances = new Ambulances({
                        phone: req.body.phone,
                        name: req.body.name,
                        location: req.body.location,
                        state: req.body.state
          
                  
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
               
                const {   name, phone, location , state} = req.body;
                
                if ( name && phone && location && state ){
                    if ( name==="" || phone ===  "" || location === ""  || state === "" ){
                        res.status(400).send({
                            message:"Incorrect entry format"
                        });
                    }else{
                 
                      
                        const firstaids = new Firstaids({
                            phone: req.body.phone,
                            name: req.body.name,
                            location: req.body.location,
                            state: req.body.state
              
                      
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

                exports.getSecurity = async (req, res) => {
                    try{
                        let state = req.params.state;
                        
                            
                            const getsecurity = await Securitys.find({state:state})
                            res.status(200).send(getsecurity)
                            console.log(getsecurity)
                                          
                       }catch(err){
                           console.log(err)
                           res.status(500).send({message:"Error while getting securities "})
                       }
                };

                exports.getLegalHelp = async (req, res) => {
                    try{
                        let state = req.params.state;
                        
                            
                            const getLegalHelp = await Legalhelps.find({state:state})
                            res.status(200).send(getLegalHelp)
                            console.log(getLegalHelp)
                                          
                       }catch(err){
                           console.log(err)
                           res.status(500).send({message:"Error while getting legal help "})
                       }
                };

                exports.getAmbulance = async (req, res) => {
                    try{
                        let state = req.params.state;
                        
                            
                            const getambulance = await Ambulances.find({state:state})
                            res.status(200).send(getambulance)
                            console.log(getambulance)
                                          
                       }catch(err){
                           console.log(err)
                           res.status(500).send({message:"Error while getting ambulances "})
                       }
                };

                exports.getFirstaid = async (req, res) => {
                    try{
                        let state = req.params.state;
                        
                            
                            const getfirstaid = await Firstaids.find({state:state})
                            res.status(200).send(getfirstaid)
                            console.log(getfirstaid)
                                          
                       }catch(err){
                           console.log(err)
                           res.status(500).send({message:"Error while getting firstaid "})
                       }
                };
                